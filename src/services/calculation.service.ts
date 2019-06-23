import { Injectable } from '@angular/core';
import { ISurePlan } from '../common/isurePlan';
import { isurePlans } from '../common/isurePlans';
import {FAIXA_ETARIA} from '../common/faixa-etaria';
import {Faixa} from '../common/faixa';
import { Plano } from '../common/plano';

var planToCalc: any[] = [];

@Injectable()
export class CalculationService {

  constructor() { }

  getResult():any[] {
    return planToCalc; 
  }

  saveCalc( planData ) {
   planToCalc = planData;
    console.log(planToCalc);
  }

}