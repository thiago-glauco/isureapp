import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CalculationService } from '../../services/calculation.service';

@Component({
  selector: 'app-calculation-card',
  templateUrl: './calculation-card.component.html',
  styleUrls: ['./calculation-card.component.css']
})
export class CalculationCardComponent implements OnInit {

  calculation: string;

  constructor(
      private location: Location,
      private calculationService: CalculationService
    ) { }

  ngOnInit( ) {
    this.calculation = this.calculationService.getResult();
  } 

  goBack(){
    this.location.back();
  }

}