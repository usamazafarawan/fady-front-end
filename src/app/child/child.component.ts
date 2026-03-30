import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {


  @Input() parentValue:string= '';

  @Input() latestValue:number = 0;


  @Output() valueChange = new EventEmitter<number>();


  value:number = 100;



  decrease(){
    this.value = this.value - 1;

    this.valueChange.emit(this.value)

  }



}
