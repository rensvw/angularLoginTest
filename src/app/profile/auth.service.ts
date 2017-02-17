import { Injectable } from '@angular/core';
import { IUser } from './user';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

    currentUser: IUser;

    constructor(private _http: Http) { }

    loginUser(userName: string, password: string){
        if(userName == "rensvanw" && password=="test"){
            this.currentUser = {
            id: 1,
            userName: userName,
            firstName: "Rens",
            lastName: "van Woudenberg"
        }
        return true;

    }
    return false;

}

    saveProfile(user): void {
      const newUser = {
        id: user.id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName
      };
      //this.users.push(newUser);
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    logout(){
        this.currentUser = null;
        return !!this.currentUser;
    }

    updateCurrentUser(firstName:string,lastName:string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}