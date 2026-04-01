import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../services/request-service.service';
import { SharedDataService } from '../services/shared-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.scss']
})
export class MyDataComponent implements OnInit {

    students:any[] = [
    // { id: 1, name: 'Ali', class: 10, marks: 85 },
    // { id: 2, name: 'Ahmed', class: 9, marks: 78 },
    // { id: 3, name: 'Sara', class: 10, marks: 92 },
    // { id: 4, name: 'Usman', class: 8, marks: 74 },
  ];


  componentValue:number = 0;


  constructor(private requestService: RequestServiceService,
    private sharedDataService:SharedDataService,
    private route:ActivatedRoute
  ) {

    this.route.queryParams.subscribe({
      next:(params)=>{
        console.log('params:  routes  ', params);


        console.log('id1 ',params['id'] )
                console.log('id2 ',params['id2'] )


      }
      ,
      error:(err)=>{
        console.log('err: ', err);
      }
    })
    
  }


  ngOnInit(): void {

    this.fetchStudentsDataFromApi();


    this.sharedDataService.sharedValues$.subscribe({
      next: (value) => {
        console.log('getting the value from Contact Compioent  ', value);
        this.componentValue = value

      }
      ,
      error: (err) => {
        console.log('err: ', err);

      }
    })

  }

  fetchStudentsDataFromApi(){

    this.requestService.getAllStudentsDataFromNodeApi().subscribe({
      next:(response)=>{
        console.log('response: get data from apis  ', response);

        if(response.length > 0){
this.students = response;


        }

      }
      ,
      error:(err)=>{
        console.log('err: ', err);

      }
    })


  }


  deleteStudent(id: number) {
    console.log('id: ', id);

    if (id) {

      this.requestService.deleteStudentDataFromNodeApi(id).subscribe({

        next: (response) => {
          console.log('delete response: ', response);

          this.students = response
        }
        ,
        error: (err) => {
          console.log('err: ', err);
        }
      })
    }



  }
}
