import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AppService } from '../app.service';
@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {
  id:any;
  otpForm:any =FormGroup;
  OTP:any
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private service:AppService){

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      console.log("getting id in otp verification page ",data)
      this.id=data['id'];
    })

    this.otpForm = new FormGroup({
      Id: new FormControl(this.id),
      OTP: new FormControl(''),
    });
    
}
onOtpChange(event:any){
  this.otpForm.patchValue({
    OTP: event
  });
}
otpSubmit(){
  this.service.otpVerification(this.otpForm.value).subscribe((data)=>{
if(data.status==200)
{
  this.router.navigate([`/login`])
}
  })
  
}
}
