import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AppService } from '../app.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private router:Router,private service:AppService){ }
  signUpForm = new FormGroup({
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    Email: new FormControl(''),
    MobileNo: new FormControl(''),
    Password: new FormControl(''),
  });
  SubmitData(){
    this.service.signUpUser(this.signUpForm.value).subscribe((data)=>{
       let id=data.data.recordsets[0].ID;
       // maybe 19 
      this.router.navigate([`/otp`,id])
    })
  }
}
