import { Component } from '@angular/core';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.scss']
})
export class MyDataComponent {


  constructor(){
    
  }

    students = [
    { id: 1, name: 'Ali', class: 10, marks: 85 },
    { id: 2, name: 'Ahmed', class: 9, marks: 78 },
    { id: 3, name: 'Sara', class: 10, marks: 92 },
    { id: 4, name: 'Usman', class: 8, marks: 74 },
  ];

}
