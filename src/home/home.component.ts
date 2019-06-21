import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../common/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  CompanyName: String = "ISure";
  user: User = {email: '', password: '', uid: '', lastSignIn: '', };
  error: boolean = false;

  constructor(private userAuth: AuthService,
  private router: Router ) { }

  ngOnInit() {
    let signedUser = this.userAuth.isUserSignedIn();
    if( signedUser ) {
      console.log("User is signed");
      console.dir( signedUser );
      this.userAuth.user.uid = signedUser.uid;
      this.userAuth.user.email = signedUser.email;
      this.userAuth.user.lastSignIn = signedUser.metadata.lastSignInTime;
      this.userAuth.user.creationTime = signedUser.metadata.creationTime;
      this.userAuth.userDataService.getUserData(signedUser.uid)
        .subscribe( (data) =>{
          this.userAuth.getCurrentUserData( data )
          this.router.navigate([`/user-home`])
        });
    } else {
      console.log("there is no user signed");
    }
  }

  login( ) {
    this.userAuth.authentication( this.user )
      .then( (result) => {
        console.log("the result is ");
        console.dir(result);
        if( result.user) {
          this.user.password = '';
          this.router.navigate(['/user-home']);
        } else {
          this.error = true;
          console.log(this.error);
        }
      })
      .catch( (error) => {
        console.log('error');
        
      })
  }

  register() {
    this.router.navigate([`register`]);
  }

  about() {
    this.router.navigate([`about`]);
  }

}