import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserDataService } from './user-data.service';
import {User} from '../common/user';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  user: User = new User();
  userData = { //Database User data
    key: "",
    payload: {}
  }

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private userDataService: UserDataService
  ) { }

  isUserSignedIn( ) {
    return this.afAuth.auth.currentUser;
  }
  
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
            userData => {
              if( userData.length ) {
                this.userData.key = userData[0].key;
                this.userData.payload = userData[0].payload.val();
                //yes, we have user data
                console.log("User data from database is: ");
                console.log(this.userData);
              } else {
                this.userDataService.createUserData(this.user);
                //we dont have user data yet
              }
              
            }
          );
        console.log(credential.user.metadata.lastSignInTime);
        return credential;
        })
      .catch( error => {alert(error); 
        return error;
      });
  }
  logout() {
    //firebase logout data
    /*this.afAuth.authState.subscribe(
      (authInfo) => console.dir(authInfo)
    )*/
    this.afAuth.auth.signOut().then(
      (logedOut) => {
        console.log("Login Out");
        console.dir(logedOut);
        console.log("user is now empty");
        //empting locar data
        this.user = new User();
        this.userData = { //Database User data
          key: "",
          payload: {}
        }
      }
    )
  }
}