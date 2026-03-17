import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  constructor(private http: HttpClient) { }





  /// we will create get api call here 

  getDataFromApi():Observable<any>{

    console.log('getDataFromApi services  called');
    return  this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

    deleteDataFromApi(id:number):Observable<any>{
    console.log('delete Data services  called');
    return  this.http.delete(`https://jsonplaceholder.typicode.com/posts`+`/${id}`);
  }


}
