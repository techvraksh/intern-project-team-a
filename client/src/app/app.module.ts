import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PatientComponent } from './profile/patient/patient.component';
import { AppointmentCardComponent } from './profile/patient/appointment-card/appointment-card.component';
import { MyappointmentComponent } from './profile/patient/myappointment/myappointment.component';
import { PatientInfoComponent } from './profile/patient/patient-info/patient-info.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProfileComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    PatientComponent,
    AppointmentCardComponent,
    MyappointmentComponent,
    PatientInfoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
