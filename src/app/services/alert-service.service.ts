import { Injectable } from '@angular/core';
import * as alertfy from 'alertifyjs';
@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

  constructor() { }
  success(message:string){
    alertfy.success(message);
  }
  error(message:string){
    alertfy.error(message);
  }
}
