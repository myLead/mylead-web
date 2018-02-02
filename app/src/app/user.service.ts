import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
 private isUserLoggedIn;
 private username;
   
 
  constructor() {
    
    this.isUserLoggedIn = false;

  }

  setUserLoggedOff(){
    this.isUserLoggedIn = false;
  }
   
  setUserloggedIn(){
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
}
