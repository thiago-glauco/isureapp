import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../../home/home.component';
import { ISurePlansComponent } from '../../isure-plans/isure-plans.component';
import { OperatorsCardComponent } from '../../operators-card/operators-card.component';
import { LifesInfoComponent } from '../lifes-info/lifes-info.component';
import { HeaderComponent } from '../header/header.component';
import { CalculationCardComponent } from '../calculation-card/calculation-card.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'plans', component: ISurePlansComponent },
  { path: 'card',     component: OperatorsCardComponent },
  { path: 'calc', component: CalculationCardComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];