import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../../home/home.component';
import { FaleConoscoComponent } from '../../fale-conosco/fale-conosco.component';
import { AboutComponent } from '../../about/about.component';
import { UserHomeComponent } from '../../user-home/user-home.component';
import { RegisterComponent } from '../../register/register.component';
import { ISurePlansComponent } from '../../isure-plans/isure-plans.component';
import { OperatorsCardComponent } from '../../operators-card/operators-card.component';
import { LifesInfoComponent } from '../lifes-info/lifes-info.component';
import { HeaderComponent } from '../header/header.component';
import { CalculationCardComponent } from '../calculation-card/calculation-card.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user-home', component: UserHomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'plans', component: ISurePlansComponent },
  { path: 'card',     component: OperatorsCardComponent },
  { path: 'calc', component: CalculationCardComponent},
  { path: 'about', component: AboutComponent},
  { path: 'fale', component: FaleConoscoComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];