import { Component, OnInit } from '@angular/core';
import { User } from '../common/user'; 
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  CompanyName: String = "ISure";
  user: User = {email: '', password: '', uid: ''};

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {

  }

  login( ) {
    this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
      .then( credential => {
        console.dir(credential)
        this.user.uid = credential.user.uid;
        console.log(credential.user.metadata.lastSignInTime)
        })
      .catch( error => alert(error));
  }

}