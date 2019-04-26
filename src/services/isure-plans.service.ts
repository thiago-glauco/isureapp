import { Injectable } from '@angular/core';
import { ISurePlan } from '../common/isurePlan';
import { isurePlans } from '../common/isurePlans';

@Injectable()
export class ISurePlansService {
  isureplans: ISurePlan[];

  constructor() { this.isureplans = isurePlans }

  getPlans( ): ISurePlan[] {
    return this.isureplans;
  }

}