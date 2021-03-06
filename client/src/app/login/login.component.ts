import { Component } from "@angular/core";
import { AuthenticationService, TokenPayload } from "../authentication.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  credentials: TokenPayload = {
    email: "",
    password: "",
    role: ""

  };

  constructor(private auth: AuthenticationService, private router: Router) { }
  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
    
        this.router.navigateByUrl("/patient");
      },
      err => {
        console.error(err);
      }
    );
  }
}
