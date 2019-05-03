import { Injectable } from '@angular/core';
import { ISurePlan } from '../common/isurePlan';
import { isurePlans } from '../common/isurePlans';
import {FAIXA_ETARIA} from '../common/faixa-etaria';
import {Faixa} from '../common/faixa';
import { Plano } from '../common/plano';

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

const planToCalc = [];
@Injectable()
export class CalculationService {

  

  constructor() { }

  getResult() {
    return planToCalc; 
  }

  saveCalc( planData ) {
   planToCalc.push(planData);
    console.log(planToCalc);
  }

}