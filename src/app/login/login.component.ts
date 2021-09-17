import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm :any = FormGroup;
  users:any =[];

  constructor(private fb : FormBuilder ,private router : Router , private http:HttpService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['' , Validators.compose([Validators.required , Validators.email,Validators.minLength(6)])],
      password: ['' , Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(8)])]
    })

    this.http.get().subscribe((res)=>
    {
      this.users = res;
    })

  }

  get f(){
    return this.loginForm.controls;
  }

 
  login(data:any){
    let email ="";
    let pass = "";
    if(data.email)
    {

      this.users.forEach((item:any)=>{
        if(item.email === data.email && item.password === data.password){
          email = item.email;
          pass = item.password;
        }
      });

      if(email.length == 0 || pass.length == 0 ){
        localStorage.clear();
        alert("Invalid Credentials");
        
      }
      else{
        alert("Login Successfull");
        localStorage.setItem("Username" , email);
        localStorage.setItem("password",JSON.stringify(pass));
        localStorage.setItem("isLoggedin" ,"true");
        this.router.navigate(['dashboard']);
      }
     
    }
    
  }
}

