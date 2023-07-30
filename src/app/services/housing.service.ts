import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/property-list/IProperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
  getAllProperties(SellRent:number):Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map(data=>
      {
        const propertiesArray: Array<IProperty>=[];
        for (const id in data){
          if(data.hasOwnProperty(id) && (data as any)[id].SellRent===SellRent){
            propertiesArray.push((data as any)[id]);
          }
        }
        return propertiesArray;
      }))

  }
}
