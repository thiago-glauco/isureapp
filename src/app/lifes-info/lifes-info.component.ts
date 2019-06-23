import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Operadora } from '../../common/operadora';
import { OPERADORAS } from '../../common/operadoras';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {CalculationService} from '../../services/calculation.service';

@Component({
  selector: 'app-lifes-info',
  templateUrl: './lifes-info.component.html',
  styleUrls: ['./lifes-info.component.css']
})
export class LifesInfoComponent implements OnInit {
  @Input() isurePlan; //Entrada do objeto pai. Tipo do plano isure
  MAX_LIFES = 6; //Max de seis vidas, limite para este app.
  selectedLifes; //Número de vidas desejadas
  lifes = [ //Objeto que contém as idades das vidas
    {id: 1, age: ''},
    {id: 2, age: ''},
    {id: 3, age: ''},
    {id: 4, age: ''},
    {id: 5, age: ''},
    {id: 6, age: ''}
  ];

  operadoras: Operadora[] = OPERADORAS; //lista de operadoras. Arquivo interno
  operadoraSelecionada: Operadora; //Operadora selecionada

  calcObject = { //Objeto a ser enviado para o serviço de cálculo
        'lifes': [],
        isurePlan: '',
        operadora: {}
    };
  
  constructor(
      private location: Location,
      private calculation: CalculationService,
      private router: Router
    ) { 
      this.calcObject.lifes = this.lifes;
  }

  ngOnInit() {
  }

  change() {
    this.calcObject.operadora = this.operadoraSelecionada;
    this.calcObject.isurePlan = this.isurePlan;
    this.calc()
    console.log(this.calcObject);
    console.log(this.calculation.getResult());
  }
  calc( ) {
    this.calculation.saveCalc(this.calcObject);

  }

}