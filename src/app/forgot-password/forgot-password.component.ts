import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AppService } from '../app.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPasswordForm = new FormGroup({
    Email: new FormControl(''),
  });
  constructor(private service:AppService){
  }
  sendingPassword(){
    console.log(this.forgotPasswordForm.value);
    this.service.forgetPwd(this.forgotPasswordForm.value).subscribe((data)=>{
    })
  }
}
