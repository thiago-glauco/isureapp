import { Component, OnInit } from '@angular/core';
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
  user: User = {email: '', password: '', uid: ''};

  constructor(private userAuth: AuthService,
  private router: Router ) { }

  ngOnInit() {

  }

  login( ) {
    this.userAuth.authentication( this.user )
      .then( (result) => {
        console.log("the result is ");
        console.dir(result);
        if( result.user) {
          this.router.navigate(['/user-home']);
        }
      })
      .catch( (error) => {
        console.log('error');
      })
  }

}