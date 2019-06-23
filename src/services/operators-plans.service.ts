import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';
import { Plano } from '../common/plano';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class OperatorsPlansService {
  planos: Plano[];
  planosRef: AngularFireList<Plano[]>;
  planoRef: AngularFireList<Plano>;
  plano: Observable<Plano>;

  constructor(private plansDB: AngularFireDatabase) {
    this.planosRef = this.plansDB.list('/Operadoras');
    
  }

  getPlans( ): Observable<Plano[][]> {
    return this.planosRef.valueChanges();
  }

}