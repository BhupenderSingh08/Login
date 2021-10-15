import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/shared/api.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {


  

  imgUrl = "https://thumbs.dreamstime.com/b/people-fill-out-form-via-mobile-application-online-flat-vector-illustration-modern-character-design-landing-page-banner-flyer-141047642.jpg"
  
  otpForm: any;
  res: any;

  constructor(private fb: FormBuilder, private formBuilder: FormBuilder, private api: ApiService, private route: ActivatedRoute, private router: Router) {

    this.otpForm = fb.group({
      userId: [localStorage.getItem( "userId" )],
      otp: ['', Validators.required],
      
     
    });
   }

  

  postOtpValues() {

    this.api.postOtp(this.otpForm.value)
      .subscribe((res: any) => {
        console.log(res);
        localStorage.setItem( 'token', res.data.access_token),
        this.router.navigate(['/'])
        console.log('hkhcfjkbvsdf');
      
 
       
         
       
        // this.router.navigate(['view'])
      },
        err => {
          alert("something went wrong")
        })




  
  

 }

  ngOnInit(): void {
  }

}
