import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';

import { NavigateComponent } from './navigate/navigate.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AddPatientComponent } from './add-patient/add-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientDetailComponent,
    NavigateComponent,
    LoginformComponent,
    HomeComponent,
    RegisterComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
