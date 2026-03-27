import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(
    private router: Router
  ){}



  routeToContactsPage(){
    this.router.navigate(['/contacts']);
  }

  routeToDataPage(){
        this.router.navigate(['/table']);
  }


  signOut(){

    localStorage.removeItem('USER')
    localStorage.removeItem("TOKEN")
            this.router.navigate(['/login']);

  }

}
