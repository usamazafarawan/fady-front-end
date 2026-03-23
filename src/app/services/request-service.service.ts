import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environemnt';

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



  //Node Apis 

  getAllStudentsDataFromNodeApi():Observable<any>{
        return this.http.get(`${environment.apiUrl}/students/get-all-data`);
  }

  deleteStudentDataFromNodeApi(id:number):Observable<any>{
    return  this.http.delete(`${environment.apiUrl}/students/delete-student/${id}`);
  }

   createUserFromNodeApi(data:any):Observable<any>{
    return  this.http.post(`${environment.apiUrl}/users/create`,data);
  }

  
   loginUserFromNodeApi(data:any):Observable<any>{
    return  this.http.post(`${environment.apiUrl}/users/login`,data);
  }




}
