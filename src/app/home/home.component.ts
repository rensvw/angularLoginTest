import { Component, OnInit } from '@angular/core';
import { AuthService } from './../profile/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageTitle: string = 'Welcome';
  firstName: string;
  lastName: string;
  

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.firstName = this._authService.currentUser.firstName;
    this.lastName = this._authService.currentUser.lastName;
  }

}
