import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

  addUser(user: User){
    let users:any=[];
    if(localStorage.getItem('users')){
     users=JSON.parse(localStorage.getItem('users')!);
     users=[user, ...users];
    }else{
     users=[user];
    }
    localStorage.setItem('users',JSON.stringify(users));
   }
}
