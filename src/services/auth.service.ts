import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {User} from '../common/user';

@Injectable()
export class AuthService {

  user: User = {
    email: '',
    password: '', //change this in near future for security reasons
    uid: ''
  }

  constructor(private afAuth: AngularFireAuth) { }
  authentication( user: User ) {
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then( credential => {
        console.dir(credential)
        this.user.uid = credential.user.uid;
        this.user.email = credential.user.email;
        console.log(credential.user.metadata.lastSignInTime)
        })
      .catch( error => alert(error));
  }
}