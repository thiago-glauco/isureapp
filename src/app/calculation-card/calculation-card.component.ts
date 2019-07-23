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
  calculationData: any[];
  result: Number;
  selectedOperator;
  finalData: any[] = [];

  constructor(
      private location: Location,
      private calculationService: CalculationService,
      private operatorsPlansService: OperatorsPlansService
    ) { 
      console.dir(this.calculationService.getResult());
    }

  ngOnInit( ) {
    this.calculationData = this.calculationService.getResult();
    this.operatorsPlansService.getPlansByCategoryAndoperator(this.calculationData.isurePlan,this.calculationData.operadora)
    .subscribe(
      (result) => {
        console.log("the result is"); console.dir(result);
for( let plan of result) {
      console.log(plan);
      let planValue = 0;
      for(let life of this.calculationData.lifes) {
        if( life.age || life.age === 0) {
          if ( life.age >=  plan.lifetable[0].min && life.age <=  plan.lifetable[0].max) {
            console.log(life.age);
            console.log(plan.lifetable[0])
            planValue += plan.lifetable[0].value;
          }
          else if ( life.age >=  plan.lifetable[1].min && life.age <=  plan.lifetable[1].max) {
            console.log(life.age);
            console.log(plan.lifetable[1])
            planValue += plan.lifetable[1].value;
          }
          else if ( life.age >=  plan.lifetable[2].min && life.age <=  plan.lifetable[2].max) {
            console.log(life.age);
            console.log(plan.lifetable[2])
            planValue += plan.lifetable[2].value;
          }
          else if ( life.age >=  plan.lifetable[3].min && life.age <=  plan.lifetable[3].max) {
            console.log(life.age);
            console.log(plan.lifetable[3])
            planValue += plan.lifetable[3].value;
          }
          else if ( life.age >=  plan.lifetable[4].min && life.age <=  plan.lifetable[4].max) {
            console.log(life.age);
            console.log(plan.lifetable[4])
            planValue += plan.lifetable[4].value;
          }
          else if ( life.age >=  plan.lifetable[5].min && life.age <=  plan.lifetable[5].max) {
            console.log(life.age);
            console.log(plan.lifetable[5])
            planValue += plan.lifetable[5].value;
          }
          else if ( life.age >=  plan.lifetable[6].min && life.age <=  plan.lifetable[6].max) {
            console.log(life.age);
            console.log(plan.lifetable[6])
            planValue += plan.lifetable[6].value;
          }
          else if ( life.age >=  plan.lifetable[7].min && life.age <=  plan.lifetable[7].max) {
            console.log(life.age);
            console.log(plan.lifetable[7])
            planValue += plan.lifetable[7].value;
          }
          else if ( life.age >=  plan.lifetable[8].min && life.age <=  plan.lifetable[8].max) {
            console.log(life.age);
            console.log(plan.lifetable[8])
            planValue += plan.lifetable[8].value;
          }
          else if ( life.age >=  plan.lifetable[9].min && life.age <=  plan.lifetable[9].max) {
            console.log(life.age);
            console.log(plan.lifetable[9])
            planValue += plan.lifetable[9].value;
          }
          else {
            console.log("Error: out of range");
          }                                                                
        }
      }
      this.finalData.push({ plan: plan.name, valor: planValue });
    }
      
  });
  }


    

  
    /*
    for(let life of this.calculationData.lifes) {
      if( life.age || life.age === 0) {
        if ( life.age >=  this.selectedOperator.lifetable[0].min && life.age <=  this.selectedOperator.lifetable[0].max) {
          console.log(life.age);
          console.log(this.selectedOperator.lifetable[0])
          this.finalValues += this.selectedOperator.lifetable[0].value;
        }
        else if ( life.age >=  this.selectedOperator.lifetable[1].min && life.age <=  this.selectedOperator.lifetable[1].max) {
          console.log(life.age);
          console.log(this.selectedOperator.lifetable[1])
          this.finalValues += this.selectedOperator.lifetable[1].value;
        }
        else if ( life.age >=  this.selectedOperator.lifetable[2].min && life.age <=  this.selectedOperator.lifetable[2].max) {
          console.log(life.age);
          console.log(this.selectedOperator.lifetable[2])
          this.finalValues += this.selectedOperator.lifetable[2].value;
        }
        else if ( life.age >=  this.selectedOperator.lifetable[3].min && life.age <=  this.selectedOperator.lifetable[3].max) {
          console.log(life.age);
          console.log(this.selectedOperator.lifetable[3])
          this.finalValues += this.selectedOperator.lifetable[3].value;
        }
        else if ( life.age >=  this.selectedOperator.lifetable[4].min && life.age <=  this.selectedOperator.lifetable[4].max) {
          console.log(life.age);
          console.log(this.selectedOperator.lifetable[4])
          this.finalValues += this.selectedOperator.lifetable[4].value;
        }
        else if ( life.age >=  this.selectedOperator.lifetable[5].min && life.age <=  this.selectedOperator.lifetable[5].max) {
          console.log(life.age);
          console.log(this.selectedOperator.lifetable[5])
          this.finalValues += this.selectedOperator.lifetable[5].value;
        }
        else if ( life.age >=  this.selectedOperator.lifetable[6].min && life.age <=  this.selectedOperator.lifetable[6].max) {
          console.log(life.age);
          console.log(this.selectedOperator.lifetable[6])
          this.finalValues += this.selectedOperator.lifetable[6].value;
        }
        else if ( life.age >=  this.selectedOperator.lifetable[7].min && life.age <=  this.selectedOperator.lifetable[7].max) {
          console.log(life.age);
          console.log(this.selectedOperator.lifetable[7])
          this.finalValues += this.selectedOperator.lifetable[7].value;
        }
        else if ( life.age >=  this.selectedOperator.lifetable[8].min && life.age <=  this.selectedOperator.lifetable[8].max) {
          console.log(life.age);
          console.log(this.selectedOperator.lifetable[8])
          this.finalValues += this.selectedOperator.lifetable[8].value;
        }
        else if ( life.age >=  this.selectedOperator.lifetable[9].min && life.age <=  this.selectedOperator.lifetable[9].max) {
          console.log(life.age);
          console.log(this.selectedOperator.lifetable[9])
          this.finalValues += this.selectedOperator.lifetable[9].value;
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