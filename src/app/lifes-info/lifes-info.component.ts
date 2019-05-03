import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Operadora } from '../../common/operadora';
import { OPERADORAS } from '../../common/operadoras';

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

  constructor() { 

  }

  ngOnInit() {
  }

}