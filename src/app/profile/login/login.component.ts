import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pageTitle: string = "Login Page"

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  login(formValues){
    if(this._authService.loginUser(formValues.userName, formValues.password)){
      console.log("Username and Password correct!");
      this._router.navigate(['home']);
    }
    else {
      alert("Username or Password incorrect");
    }
  }

}
