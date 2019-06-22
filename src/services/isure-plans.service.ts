import { Injectable } from '@angular/core';
import { ISurePlan } from '../common/isurePlan';
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';
import { isurePlans } from '../common/isurePlans';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ISurePlansService {
  isureplans: ISurePlan[];
  plansRef: AngularFireList<ISurePlan>;
  planRef: AngularFireList<ISurePlan>;
  plan: Observable<ISurePlan>;

  constructor(private isurePlansDB: AngularFireDatabase) {
    this.plansRef = this.isurePlansDB.list('/planos');
    this.isureplans = isurePlans
  }

  getPlans( ): Observable<ISurePlan[]> {
    return this.plansRef.valueChanges();
  }

}