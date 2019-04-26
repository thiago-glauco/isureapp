import { Component, OnInit } from '@angular/core';
import { ISurePlan } from '../common/isurePlan';
import { isurePlans } from '../common/isurePlans';
import {ISurePlansService} from '../services/isure-plans.service';

const OPERADORAS = [
  {name: 'Bradesco'},
  {name: 'Sulamérica'},
  {name: 'Amil'},
  {name: 'Intermédica'},
  {name: 'Sompo'},
  {name: 'Unimed'}
]

@Component({
  selector: 'app-isure-plans',
  templateUrl: './isure-plans.component.html',
  styleUrls: ['./isure-plans.component.css']
})

export class ISurePlansComponent implements OnInit {
  isureplans: ISurePlan[];
  operadoras = OPERADORAS;

  constructor(private isurePlansService: ISurePlansService) { }
  ngOnInit() {
    this.isureplans = this.isurePlansService.getPlans();
  }
}