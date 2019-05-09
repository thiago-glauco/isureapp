/*
O calculation card apresentará os valores de orçamento do planos para os usuários dos planos.
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CalculationService } from '../../services/calculation.service';
import { FAIXA_ETARIA } from '../../common/faixa-etaria';
import { Plano } from '../../common/plano';
import { PlansMock } from '../../common/PlansMock';

const PLANOS = PlansMock;

/*Plano[] = [
  {
    id: 1,
    category: 'Executivo',
    name: 'Bradesco01',
    operator: 'Bradesco',
    description: "O plano mais foda do Bradesco com direito a quarto",
    lifeTable: FAIXA_ETARIA,
  }
]*/

@Component({
  selector: 'app-calculation-card',
  templateUrl: './calculation-card.component.html',
  styleUrls: ['./calculation-card.component.css']
})
export class CalculationCardComponent implements OnInit {

  calculationData: any[];
  result: Number;
  selectedOperator;
  finalData: any[] = [];

  constructor(
      private location: Location,
      private calculationService: CalculationService
    ) { }

  ngOnInit( ) {

    this.calculationData = this.calculationService.getResult();
    console.log(this.calculationData.operadora);

    this.selectedOperator = PLANOS.filter( ( plano ) => ( plano.operator === this.calculationData.operadora));
    console.log(this.selectedOperator);
    
    for( let plan of this.selectedOperator) {
      console.log(plan);
      let planValue = 0;
      for(let life of this.calculationData.lifes) {
        if( life.age || life.age === 0) {
          if ( life.age >=  plan.lifeTable[0].min && life.age <=  plan.lifeTable[0].max) {
            console.log(life.age);
            console.log(plan.lifeTable[0])
            planValue += plan.lifeTable[0].value;
          }
          else if ( life.age >=  plan.lifeTable[1].min && life.age <=  plan.lifeTable[1].max) {
            console.log(life.age);
            console.log(plan.lifeTable[1])
            planValue += plan.lifeTable[1].value;
          }
          else if ( life.age >=  plan.lifeTable[2].min && life.age <=  plan.lifeTable[2].max) {
            console.log(life.age);
            console.log(plan.lifeTable[2])
            planValue += plan.lifeTable[2].value;
          }
          else if ( life.age >=  plan.lifeTable[3].min && life.age <=  plan.lifeTable[3].max) {
            console.log(life.age);
            console.log(plan.lifeTable[3])
            planValue += plan.lifeTable[3].value;
          }
          else if ( life.age >=  plan.lifeTable[4].min && life.age <=  plan.lifeTable[4].max) {
            console.log(life.age);
            console.log(plan.lifeTable[4])
            planValue += plan.lifeTable[4].value;
          }
          else if ( life.age >=  plan.lifeTable[5].min && life.age <=  plan.lifeTable[5].max) {
            console.log(life.age);
            console.log(plan.lifeTable[5])
            planValue += plan.lifeTable[5].value;
          }
          else if ( life.age >=  plan.lifeTable[6].min && life.age <=  plan.lifeTable[6].max) {
            console.log(life.age);
            console.log(plan.lifeTable[6])
            planValue += plan.lifeTable[6].value;
          }
          else if ( life.age >=  plan.lifeTable[7].min && life.age <=  plan.lifeTable[7].max) {
            console.log(life.age);
            console.log(plan.lifeTable[7])
            planValue += plan.lifeTable[7].value;
          }
          else if ( life.age >=  plan.lifeTable[8].min && life.age <=  plan.lifeTable[8].max) {
            console.log(life.age);
            console.log(plan.lifeTable[8])
            planValue += plan.lifeTable[8].value;
          }
          else if ( life.age >=  plan.lifeTable[9].min && life.age <=  plan.lifeTable[9].max) {
            console.log(life.age);
            console.log(plan.lifeTable[9])
            planValue += plan.lifeTable[9].value;
          }
          else {
            console.log("Error: out of range");
          }                                                                
        }
      }
      this.finalData.push({ plan: plan.name, valor: planValue });
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


  } 

  goBack(){
    this.location.back();
  }

}