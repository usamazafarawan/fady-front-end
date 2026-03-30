import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }


  readonly sharedValues = new BehaviorSubject<number>(0);
  readonly sharedValues$ = this.sharedValues.asObservable();


  


}
