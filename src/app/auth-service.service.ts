import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }


  isLoggedIn():boolean{
    return  !!localStorage.getItem('TOKEN') //   i am fetching the stored token to see
  }


  
  logOut(){
    localStorage.removeItem('TOKEN')
    localStorage.removeItem('USER')

  }
}
