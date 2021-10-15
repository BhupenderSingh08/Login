import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    currentUserValue: any;
    getAccessToken() {
        throw new Error('Method not implemented.');
    }

  link = "https://limoapi.mobilytedev.com/api/login";

  constructor(private http: HttpClient) { }

  postData(data:any) {
    return this.http.post<any>(this.link+"-otp",data)
    .pipe( map((res:any)=>{
      return res;

    }) )

}
postOtp(data:any) {
  return this.http.post<any>("https://limoapi.mobilytedev.com/api/login",data)
  .pipe( map((res:any)=>{
    return res;
  }) )
}
}
