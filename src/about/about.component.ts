import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private location: Location,
    private router: Router ) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  fale() {
    this.router.navigate([`fale`]);
  }

}