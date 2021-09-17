import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup;
  

  constructor(private fb : FormBuilder,private http:HttpService,private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      fullname: ['' , Validators.compose([Validators.required , Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')])],
      email: ['' , Validators.compose([Validators.required , Validators.email,Validators.minLength(6)])],
      password: ['' , Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(8)])],
      confirmpassword: ['' ,Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(8)])],
      
    })
   

  }

  get f(){
    return this.signupForm.controls;
  }

  signup(){

    if(this.signupForm)
    {
      this.http.post(this.signupForm.value).subscribe((res)=>
    {
      alert("Signup Succesfull ");
      this.router.navigate(['login']);
      this.signupForm.reset();
    })
    }
  }

}
