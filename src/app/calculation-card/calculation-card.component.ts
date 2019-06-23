/*
O calculation card apresentará os valores de orçamento do planos para os usuários dos planos.
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CalculationService } from '../../services/calculation.service';
import { OperatorsPlansService } from '../../services/operators-plans.service';
import { Plano } from '../../common/plano';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calculation-card',
  templateUrl: './calculation-card.component.html',
  styleUrls: ['./calculation-card.component.css']
})
export class CalculationCardComponent implements OnInit {

  selectedPlans: Plano[];

  constructor(
      private location: Location,
      private calculationService: CalculationService,
      private operatorsPlansService: OperatorsPlansService
    ) { 
      console.dir(this.calculationService.getResult());
    }

  ngOnInit( ) {
    this.operatorsPlansService.getPlansByCategoryAndoperator("Essencial","Amil")
    .subscribe(
      (result) => {console.log("the result is"); console.dir(result)}
    )
      
  }

  
    /*
    for(let life of this.calculationData.lifes) {
      if( life.age || life.age === 0) {
        if ( life.age >=  this.selectedOperator.lifeTable[0].min && life.age <=  this.selectedOperator.lifeTable[0].max) {
          console.log(life.age);
          console.log(this.selectedOperator.lifeTable[0])
          this.finalValues += this.selectedOperator.lifeTable[0].value;
        }
        else if ( life.age >=  this.selectedOperator.lifeTable[1].min && life.age <=  this.selectedOperator.lifeTable[1].max) {
          console.log(life.age);
          console.log(this.selectedOperator.lifeTable[1])
          this.finalValues += this.selectedOperator.lifeTable[1].value;
        }
        else if ( life.age >=  this.selectedOperator.lifeTable[2].min && life.age <=  this.selectedOperator.lifeTable[2].max) {
          console.log(life.age);
          console.log(this.selectedOperator.lifeTable[2])
          this.finalValues += this.selectedOperator.lifeTable[2].value;
        }
        else if ( life.age >=  this.selectedOperator.lifeTable[3].min && life.age <=  this.selectedOperator.lifeTable[3].max) {
          console.log(life.age);
          console.log(this.selectedOperator.lifeTable[3])
          this.finalValues += this.selectedOperator.lifeTable[3].value;
        }
        else if ( life.age >=  this.selectedOperator.lifeTable[4].min && life.age <=  this.selectedOperator.lifeTable[4].max) {
          console.log(life.age);
          console.log(this.selectedOperator.lifeTable[4])
          this.finalValues += this.selectedOperator.lifeTable[4].value;
        }
        else if ( life.age >=  this.selectedOperator.lifeTable[5].min && life.age <=  this.selectedOperator.lifeTable[5].max) {
          console.log(life.age);
          console.log(this.selectedOperator.lifeTable[5])
          this.finalValues += this.selectedOperator.lifeTable[5].value;
        }
        else if ( life.age >=  this.selectedOperator.lifeTable[6].min && life.age <=  this.selectedOperator.lifeTable[6].max) {
          console.log(life.age);
          console.log(this.selectedOperator.lifeTable[6])
          this.finalValues += this.selectedOperator.lifeTable[6].value;
        }
        else if ( life.age >=  this.selectedOperator.lifeTable[7].min && life.age <=  this.selectedOperator.lifeTable[7].max) {
          console.log(life.age);
          console.log(this.selectedOperator.lifeTable[7])
          this.finalValues += this.selectedOperator.lifeTable[7].value;
        }
        else if ( life.age >=  this.selectedOperator.lifeTable[8].min && life.age <=  this.selectedOperator.lifeTable[8].max) {
          console.log(life.age);
          console.log(this.selectedOperator.lifeTable[8])
          this.finalValues += this.selectedOperator.lifeTable[8].value;
        }
        else if ( life.age >=  this.selectedOperator.lifeTable[9].min && life.age <=  this.selectedOperator.lifeTable[9].max) {
          console.log(life.age);
          console.log(this.selectedOperator.lifeTable[9])
          this.finalValues += this.selectedOperator.lifeTable[9].value;
        }
        else {
          console.log("Error: out of range");
        }                                                                
      }
    }*/


  goBack(){
    this.location.back();
  }

}