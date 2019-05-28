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
    public userDataService: UserDataService
  ) { }

  isUserSignedIn( ) {
    return this.afAuth.auth.currentUser;
  }
  
  authentication( user: User ) {
    //Authenticat user with email and password
      return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then( credential => {
        //get credentials and save at user.
        console.dir(credential)
        this.user.uid = credential.user.uid;
        this.user.email = credential.user.email;
        this.user.lastSignIn = credential.user.metadata.lastSignInTime;
        this.user.creationTime = credential.user.metadata.creationTime;
        this.userDataService.getUserData(this.user.uid)
          .subscribe( (data) =>
            this.getCurrentUserData( data )
          );
        console.log(credential.user.metadata.lastSignInTime);
        return credential;
        })
      .catch( error => {alert(error); 
        return error;
      });
  }

  getCurrentUserData( data ) {
    //If user exists in the database we get its data and save at userData
    if( data.length ) {
      this.userData.key = data[0].key;
      this.userData.payload = data[0].payload.val();
      this.user.name = this.userData.payload.name
      this.user.cel = this.userData.payload.cel;
      this.user.cpf = this.userData.payload.cpf;
      //yes, we have user data
      console.log("User data from database is: ");
      console.log(this.userData);
    } else {
      //If user doen't exists in the database we create it
      this.userData.key = this.userDataService.createUserData(this.user);
      this.userData.payload = this.user;
      console.dir("creation key is: " + this.userData.key )
      //we dont have user data yet
    }
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

  createUser(email, password) {
    console.log("user to be created: ")
    console.dir(this.user)
    //cria usuário no serviço de autenticação
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( (credential) => {
        console.log("criando usuário: ");
        console.dir(credential);
        //copia dados do serviço de autenticação para o objeto usuario
        this.user.uid = credential.user.uid;
        this.user.email = credential.user.email;
        this.user.lastSignIn = credential.user.metadata.lastSignInTime;
        this.user.creationTime = credential.user.metadata.creationTime;
        //salva dados do usuário no banco de dados do usuário
        this.userData.key = this.userDataService.createUserData(this.user);
        this.userData.payload = this.user;
        return credential;
      })
      .catch( (error) => {
        console.log("erro ao criar usuário: ");
        console.dir(error);
        alert("Não foi possível registrar este usuário: " + JSON.stringify(error));
        return error;
      });
  }
}