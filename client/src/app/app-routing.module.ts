import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "./profile/profile.component";
import { PatientComponent } from "./profile/patient/patient.component";
import { DocComponent } from "./profile/doc/doc.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "patient", component: PatientComponent, canActivate: [AuthGuard] },
  { path: "register", component: RegisterComponent },
  { path: "doc", component: DocComponent, canActivate: [AuthGuard] },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
