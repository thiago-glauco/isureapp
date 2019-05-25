import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserDataService } from './user-data.service';
import {User} from '../common/user';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  user: User = {
    email: '',
    password: '', //change this in near future for security reasons
    uid: '',
    creationTime: '',
    lastSignIn: '',
    error: false
  }

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private userDataService: UserDataService
  ) { }
  
  authentication( user: User ) {
      return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then( credential => {
        console.dir(credential)
        this.user.uid = credential.user.uid;
        this.user.email = credential.user.email;
        this.user.lastSignIn = credential.user.metadata.lastSignInTime;
        this.user.creationTime = credential.user.metadata.creationTime;
        this.userDataService.getUserData(this.user.uid)
          .subscribe(
            userData => console.log(userData)
          );
        console.log(credential.user.metadata.lastSignInTime);
        return credential;
        })
      .catch( error => {alert(error); 
        return error;
      });
  }
}