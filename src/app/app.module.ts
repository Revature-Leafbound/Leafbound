<<<<<<< HEAD
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
=======
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 21-fe-front-end-review

import {MaterialExampleModule} from '../material.module';
import { navbar } from './navbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';
// import { AppRoutingModule } from './app-routing.module';
@NgModule({
<<<<<<< HEAD
  declarations: [navbar],
=======
  declarations: [
    AppComponent,
    RegisterComponent
  ],
>>>>>>> 21-fe-front-end-review
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
<<<<<<< HEAD
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    RoutingModule,
    
=======
    AppRoutingModule,
    BrowserAnimationsModule
>>>>>>> 21-fe-front-end-review
  ],
  providers: [],
  bootstrap: [navbar],
})
export class AppModule {}