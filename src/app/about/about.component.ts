import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {


  parentValue1: string = 'Hello from Parent Component!';
  value:number = 1;


  childValue:number = 0;



  increase(){
    this.value = this.value + 1;
    console.log(' this.value: ',  this.value);

  }




  OnValueChange(value:any){
    console.log('getting from the child  ', value);

    this.childValue = value 

  }



}
