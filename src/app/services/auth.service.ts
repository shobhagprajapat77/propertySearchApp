import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //authinticate the user
  authUser(user:any){
    let UserArray=[];
    if(localStorage.getItem('users')){
      UserArray=JSON.parse(localStorage.getItem('users')!);
    }

    return UserArray.find((p: any)=> p.userName===user.userName && p.password===user.userPass);

  }
}
