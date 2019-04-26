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
import {MatSelectModule} from '@angular/material/select';


import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from '../home/home.component';
import { ISurePlansComponent } from '../isure-plans/isure-plans.component';
import { ISurePlansService } from '../services/isure-plans.service';
import 'hammerjs';
import { LifesInfoComponent } from './lifes-info/lifes-info.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports:    [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    FlexLayoutModule ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    ISurePlansComponent,
    LifesInfoComponent,
    AppRoutingModule,
    HeaderComponent
  ],
  providers:  [
    ISurePlansService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
