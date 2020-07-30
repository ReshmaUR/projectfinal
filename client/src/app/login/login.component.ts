import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // HeaderComponent header = new HeaderComponent();
  loginUserDetails = {
    "email":"",
    "password":""
  };
  constructor(private _auth: AuthService , private router : Router) { }
  loginUser(){
    this. _auth.loginUser(this.loginUserDetails)   
    .subscribe(
      res=>{
        localStorage.setItem('token',res['token']);
        
        this.router.navigate(['/ljobs'])},
      err=>{
        console.log(err)
        alert("Invalid Credentials")
      }
    )
  }
 
  ngOnInit(): void {
  }

}



// if(this.loginUserDetails.email=="admin"&&this.loginUserDetails.password=="12345"){
    //   res=>this.router.navigate(['/ajobs']);
    //   err=>{
    //     console.log(err)
    //     alert("Invalid Credentials")
    //   }
    // }
    // else{
    //   res=>this.router.navigate(['/ljobs'])
    //   err=>{
    //     console.log(err)
    //     alert("Invalid Credentials")
    //   }
    // }
    // , private header : HeaderComponent