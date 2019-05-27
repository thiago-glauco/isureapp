import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../common/user';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  user: User = this.authService.user;
  
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}