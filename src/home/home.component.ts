import { Component, OnInit } from '@angular/core';
import { User } from '../common/user';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  CompanyName: String = "ISure";
  user: User = {email: '', password: '', uid: ''};

  constructor(private userAuth: AuthService ) { }

  ngOnInit() {

  }

  login( ) {
    this.userAuth.authentication( this.user );
  }

}