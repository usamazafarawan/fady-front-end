import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../services/request-service.service';
import { SharedDataService } from '../services/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {


  apisData1:any[] = [];
  apisData2:any[] = [];
  apisData3:any[] = [];


  value:number = 0;



  constructor(private requestServiceService: RequestServiceService,
    private sharedDataService: SharedDataService,
    private router:Router
  ) {

  }

  ngOnInit(): void {
    console.log('contacts component initialized');
  this.fetchDataFromApi();

  }


  fetchDataFromApi(){

    console.log('fetchDataFromApi called');
    this.requestServiceService.getDataFromApi().subscribe(
      {
        next:(response)=>{
          console.log('response: *** final data  ', response);

          if(response.length > 0){
            this.apisData1 = response;
          }
        }
        ,
        error:(error)=>{
          console.log('error: ', error);
        }
      } 
    )
  }


  editPost(){

  }

  deletePost(item:any, index:number){
    this.requestServiceService.deleteDataFromApi(item.id).subscribe(
      {
        next:(response)=>{
          console.log('delete response: ', response);

          this.apisData1.splice(index, 1);
        }
        ,
        error:(error)=>{
          console.log('delete error: ', error);
        } 
      }
    );
  }


  increse(){
    this.value = this.value + 1;
    console.log('  this.value: ',   this.value);


this.sharedDataService.sharedValues.next(this.value)

  }



  passDataByRoutes() {


    this.router.navigate(['/table']

      , {

        queryParams: {
          id: 'test-id-1',
          id2: 'test-id-2'
        }
      });

  }



}
