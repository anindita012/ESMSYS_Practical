import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AppService } from '../app.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  constructor(private router:Router,private service:AppService){ }
  loginForm = new FormGroup({
    EmailOrMobileNo: new FormControl(''),
    Password: new FormControl('')
  });
  loginCheck(){
    this.service.login(this.loginForm.value).subscribe((data)=>{
if(data.status==200)
{
  this.router.navigate([`/allUser`])
}
    })
  }
}