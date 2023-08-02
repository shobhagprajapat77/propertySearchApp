import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertServiceService } from 'src/app/services/alert-service.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService:AuthService,
              private alertfy:AlertServiceService,
              private router:Router

    ) { }

  ngOnInit(): void {
  }
  onLogin(loginForm:NgForm){
   //console.log(loginForm.value);
   const token=this.authService.authUser(loginForm.value)
   if(token){
    localStorage.setItem('token',token.userName);
    this.alertfy.success('login successfully');
    this.router.navigate(['/']);
   }else{
    this.alertfy.error('Username and password wrong!');
   }
  }

}
