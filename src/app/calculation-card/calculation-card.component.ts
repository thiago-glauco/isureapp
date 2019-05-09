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

const PLANOS: Plano[] = [
  {
    id: 1,
    category: 'Executivo',
    name: 'Bradesco01',
    operator: 'Bradesco',
    description: "O plano mais foda do Bradesco com direito a quarto",
    lifeTable: FAIXA_ETARIA,
  }
]

@Component({
  selector: 'app-calculation-card',
  templateUrl: './calculation-card.component.html',
  styleUrls: ['./calculation-card.component.css']
})
export class CalculationCardComponent implements OnInit {

  calculationData: any[];
  result: Number;
  selectedPlan = PLANOS[0];
  finalValue: number = 0;

  constructor(
      private location: Location,
      private calculationService: CalculationService
    ) { }

  ngOnInit( ) {

    this.calculationData = this.calculationService.getResult();
    
    for(let life of this.calculationData[0].lifes) {
      if( life.age || life.age === 0) {
        if ( life.age >=  this.selectedPlan.lifeTable[0].min && life.age <=  this.selectedPlan.lifeTable[0].max) {
          console.log(life.age);
          console.log(this.selectedPlan.lifeTable[0])
          this.finalValue += this.selectedPlan.lifeTable[0].value;
        }
        else if ( life.age >=  this.selectedPlan.lifeTable[1].min && life.age <=  this.selectedPlan.lifeTable[1].max) {
          console.log(life.age);
          console.log(this.selectedPlan.lifeTable[1])
          this.finalValue += this.selectedPlan.lifeTable[1].value;
        }
        else if ( life.age >=  this.selectedPlan.lifeTable[2].min && life.age <=  this.selectedPlan.lifeTable[2].max) {
          console.log(life.age);
          console.log(this.selectedPlan.lifeTable[2])
          this.finalValue += this.selectedPlan.lifeTable[2].value;
        }
        else if ( life.age >=  this.selectedPlan.lifeTable[3].min && life.age <=  this.selectedPlan.lifeTable[3].max) {
          console.log(life.age);
          console.log(this.selectedPlan.lifeTable[3])
          this.finalValue += this.selectedPlan.lifeTable[3].value;
        }
        else if ( life.age >=  this.selectedPlan.lifeTable[4].min && life.age <=  this.selectedPlan.lifeTable[4].max) {
          console.log(life.age);
          console.log(this.selectedPlan.lifeTable[4])
          this.finalValue += this.selectedPlan.lifeTable[4].value;
        }
        else if ( life.age >=  this.selectedPlan.lifeTable[5].min && life.age <=  this.selectedPlan.lifeTable[5].max) {
          console.log(life.age);
          console.log(this.selectedPlan.lifeTable[5])
          this.finalValue += this.selectedPlan.lifeTable[5].value;
        }
        else if ( life.age >=  this.selectedPlan.lifeTable[6].min && life.age <=  this.selectedPlan.lifeTable[6].max) {
          console.log(life.age);
          console.log(this.selectedPlan.lifeTable[6])
          this.finalValue += this.selectedPlan.lifeTable[6].value;
        }
        else if ( life.age >=  this.selectedPlan.lifeTable[7].min && life.age <=  this.selectedPlan.lifeTable[7].max) {
          console.log(life.age);
          console.log(this.selectedPlan.lifeTable[7])
          this.finalValue += this.selectedPlan.lifeTable[7].value;
        }
        else if ( life.age >=  this.selectedPlan.lifeTable[8].min && life.age <=  this.selectedPlan.lifeTable[8].max) {
          console.log(life.age);
          console.log(this.selectedPlan.lifeTable[8])
          this.finalValue += this.selectedPlan.lifeTable[8].value;
        }
        else if ( life.age >=  this.selectedPlan.lifeTable[9].min && life.age <=  this.selectedPlan.lifeTable[9].max) {
          console.log(life.age);
          console.log(this.selectedPlan.lifeTable[9])
          this.finalValue += this.selectedPlan.lifeTable[9].value;
        }
        else {
          console.log("Error: out of range");
        }                                                                
      }
    }


  } 

  goBack(){
    this.location.back();
  }

}