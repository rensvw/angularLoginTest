import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  pageTitle: string = "Signup Page"

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  signUp(formValues){
    if(this._authService.loginUser(formValues.userName, formValues.password)){
      console.log("Username and Password correct!");
      this._router.navigate(['home']);
    }
    else {
      alert("Username or Password incorrect");
    }
  }

}
