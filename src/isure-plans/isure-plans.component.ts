
import { Component, OnInit } from '@angular/core';
import { ISurePlan } from '../common/isurePlan';
import { isurePlans } from '../common/isurePlans';
import {ISurePlansService} from '../services/isure-plans.service';
import { Operadora } from '../common/operadora';
import { OPERADORAS } from '../common/operadoras';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-isure-plans',
  templateUrl: './isure-plans.component.html',
  styleUrls: ['./isure-plans.component.css']
})

export class ISurePlansComponent implements OnInit {

  isureplans: ISurePlan[];
  operadoras = OPERADORAS;
  operadoraSelecionada: Operadora;

  constructor(private isurePlansService: ISurePlansService) { }
  ngOnInit() {
   this.isurePlansService.getPlans().subscribe(
      result => {
        console.log("isure plans: ");
        console.dir(result)
        this.isureplans = result;
      }
    )
  }
}