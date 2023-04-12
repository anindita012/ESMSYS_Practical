import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {OtpVerificationComponent} from './otp-verification/otp-verification.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserByIdComponent } from './user-by-id/user-by-id.component';
const routes: Routes = [
  {
    path:'',
    component:SignUpComponent
  },
  {
    path:'login',
    component:LogInComponent
  },
  {
    path:'forgotPassword',
    component:ForgotPasswordComponent
  },
  {
    path:'otp/:id',
    component:OtpVerificationComponent,

  },
  {
    path:'allUser',
    component:AllUsersComponent
  },
  {
    path:'EPPNumberById/:id',
    component:UserByIdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
