import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Operadora } from '../../common/operadora';
import { OPERADORAS } from '../../common/operadoras';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {CalculationService} from '../../services/calculation.service';

@Component({
  selector: 'app-lifes-info',
  templateUrl: './lifes-info.component.html',
  styleUrls: ['./lifes-info.component.css']
})
export class LifesInfoComponent implements OnInit {
  MAX_LIFES = 6;
  selectedLifes;
  lifes = [
    {id: 1, age: ''},
    {id: 2, age: ''},
    {id: 3, age: ''},
    {id: 4, age: ''},
    {id: 5, age: ''},
    {id: 6, age: ''}
  ];
  operadoras: Operadora[] = OPERADORAS;
  operadoraSelecionada: Operadora;
  calcObject = {
        'lifes': [],
        operadora: {}
    };
  
  constructor(
      private location: Location,
      private calculation: CalculationService,
    ) { 
      this.calcObject.lifes = this.lifes;
  }

  ngOnInit() {
  }

  change() {
    this.calcObject.operadora = this.operadoraSelecionada;
    this.calc()
    console.log(this.calcObject);
    console.log(this.calculation.getResult());
  }
  calc( ) {
    this.calculation.saveCalc(this.calcObject);
  }

}