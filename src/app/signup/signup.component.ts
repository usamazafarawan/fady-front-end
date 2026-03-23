import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestServiceService } from '../services/request-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {


  signupForm:FormGroup;


  constructor(private fb:FormBuilder,

    private requestService:RequestServiceService,
    private router:Router
  ){

    this.signupForm = this.fb.group({

       firstName: ['',Validators.required],
       lastName:['',Validators.required],
       email:['',[Validators.required,Validators.email]], // check @ in the text follow email pattern
       role:['user',Validators.required],
       password:['',Validators.required]
    })

  }


  onSubmit(){

    console.log("Data check", this.signupForm.value)

    this.signupForm.markAllAsTouched();

    if(!this.signupForm.invalid){

      console.log("Ok ")

      const payload= this.signupForm.value;
      console.log('payload: ', payload);
      this.requestService.createUserFromNodeApi(payload).subscribe({

        next:(response)=>{
          console.log('response: ', response);
          this.router.navigate(['/login'])
        }
        ,
        error:(err)=>{
          console.log('err: ', err);

        }
      })

    }
  
  }

}
