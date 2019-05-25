import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';

//FireBase imports:
import { environment } from '../common/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { ISurePlansService } from '../services/isure-plans.service';
import { CalculationService } from '../services/calculation.service';
import { AuthService } from '../services/auth.service';
import { UserDataService } from '../services/user-data.service';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from '../home/home.component';
import { ISurePlansComponent } from '../isure-plans/isure-plans.component';
import { OperatorsCardComponent } from '../operators-card/operators-card.component';
import 'hammerjs';
import { LifesInfoComponent } from './lifes-info/lifes-info.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { CalculationCardComponent } from './calculation-card/calculation-card.component';
import { UserHomeComponent } from '../user-home/user-home.component';
import { RegisterComponent } from '../register/register.component';

@NgModule({
  imports:    [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),//Initializing Firebase services
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MatToolbarModule, //Material Design imports
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    AppRoutingModule,
    MatListModule,
    MatStepperModule,
    FlexLayoutModule //Flex Layout import
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    ISurePlansComponent,
    LifesInfoComponent,
    HeaderComponent,
    OperatorsCardComponent,
    CalculationCardComponent,
    UserHomeComponent,
    RegisterComponent
  ],
  providers:  [
    ISurePlansService,
    CalculationService,
    AuthService,
    UserDataService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
