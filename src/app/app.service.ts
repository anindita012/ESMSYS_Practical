import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
 array:any=[
  {UserID: "1", FirstName: "Rajroshan", LastName: "Pasi",
  MobileNo: "9428130839",Email:"RaPa@gmail.com",epfCount:5},
  {UserID: "2", FirstName: "Anindita", LastName: "Shubhangi",
  MobileNo: "3458900",Email:"shab@gmail.com",epfCount:10},
  {UserID: "3", FirstName: "Rohit", LastName: "kumar",
  MobileNo: "987542",Email:"kuro@gmail.com",epfCount:6},
  {UserID: "4", FirstName: "Arindam", LastName: "Animesh",
  MobileNo: "43527892",Email:"ari@gmail.com",epfCount:13},
  {UserID: "5", FirstName: "Bhuoma", LastName: "Rukaiya",
  MobileNo: "8434567",Email:"rubh@gmail.com",epfCount:1}
  ];
  
  public getData(): Observable<any> {
    return this.http.get('https://qaapi.jahernotice.com/api/Epp/0');
  }
  public signUpUser(user:any): Observable<any> {
    console.log("inside service signUp User",user);
    const url = 'https://qaapi.jahernotice.com/Admin/SignUp';
    return this.http.post<any>(url, user);
  }
  public otpVerification(otp:any): Observable<any> {
    const url = 'https://qaapi.jahernotice.com/Admin/OTP/verify';
    return this.http.post<any>(url, otp);
  }
  public login(signInUser:any): Observable<any> {
    const url = 'https://qaapi.jahernotice.com/Admin/SignIn';
    return this.http.post<any>(url, signInUser);
  }
  public forgetPwd(email:any): Observable<any> {
    const url = 'https://qaapi.jahernotice.com/Admin/Password/send';
    return this.http.post<any>(url, email);
  }
  public getEPPById(id:any): Observable<any> {
    const url = `https://qaapi.jahernotice.com/api/EppByID/${id}`;
    return this.http.get<any>(url);
  }
}
