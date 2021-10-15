import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/shared/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  
  signinForm: any;



  constructor(private fb: FormBuilder, private formBuilder: FormBuilder, private api: ApiService, private route: ActivatedRoute, private router: Router) {

    this.signinForm = fb.group({
      phone: ['', Validators.required],
      countryCode: ['+91'],
      phoneCountry: ['in'],
      role: ['driver'],
    });

  



  }

  postDataValues() {

    this.api.postData(this.signinForm.value)
    
      .subscribe((res: any) => {
        console.log(res);
         
        localStorage.setItem( 'userId', res.data.id),
        
       
       
         this.signinForm.reset();
       
         this.router.navigate(['otp'])
      },
        err => {
          alert("something went wrong")
        })


  
  

 }

 
  ngOnInit(): void {
  }

}
