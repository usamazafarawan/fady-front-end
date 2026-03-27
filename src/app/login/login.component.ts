import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestServiceService } from '../services/request-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  loginForm:FormGroup;

  constructor(private fb:FormBuilder, private requestService:RequestServiceService ,
     private router:Router){

    this.loginForm = this.fb.group({

             password:['',Validators.required],
             email:['',[Validators.required,Validators.email]], // check @ in the text follow email pattern
    
    })

  }


  onSubmit(){
    console.log("check ", this.loginForm.value)

this.loginForm.markAllAsTouched()
       if(!this.loginForm.invalid){

      console.log("Ok ")

      const payload= this.loginForm.value;
      console.log('payload: ', payload);
      this.requestService.loginUserFromNodeApi(payload).subscribe({

        next:(response)=>{
          console.log('response: ', response);
          alert('Loggin Successfully')


          // store the token  and user detail 
          localStorage.setItem('TOKEN',response.token)
          localStorage.setItem('USER',JSON.stringify(response.user));

          
          this.router.navigate(['/contacts'])
        }
        ,
        error:(err)=>{

          alert( `${err?.error?.message}`)
          console.log('err: ', err);

        }
      })

    }
  }

}
