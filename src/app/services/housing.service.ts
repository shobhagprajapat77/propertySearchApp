import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
 // baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

   // get property from local storage
   getProperty(id: number) {
    return this.getAllProperties().pipe(map(propertiesArray=>{
      return propertiesArray.find(p=>p.Id===id);
    }));
}
  getAllProperties(SellRent?:number):Observable<Property[]>{
    return this.http.get('data/properties.json').pipe(
      map(data=>
      {
        const propertiesArray: Array<Property>=[];
        const localProperties=JSON.parse(localStorage.getItem('newProp')!);
        if(localProperties){
          for(const id in localProperties){
            if(SellRent){
              if(localProperties.hasOwnProperty(id) && localProperties[id].SellRent===SellRent){
                propertiesArray.push(localProperties[id]);
              }
            }else{
              propertiesArray.push(localProperties[id]);
            }
          }
        }
        for(const id in data){
          if(SellRent){
            if(data.hasOwnProperty(id) && (data as any)[id].SellRent===SellRent){
              propertiesArray.push((data as any)[id]);
            }
          }else{
            propertiesArray.push((data as any)[id]);
          }
        }
        return propertiesArray;
      }));
      return this.http.get<Property[]>('data/properties.json');

  }


  // getAllCities(): Observable<string[]> {
  //     return this.http.get<string[]>(this.baseUrl + '/city/cities');
  // }

  // getPropertyTypes(): Observable<Ikeyvaluepair[]> {
  //     return this.http.get<Ikeyvaluepair[]>(this.baseUrl + '/propertytype/list');
  // }

  // getFurnishingTypes(): Observable<Ikeyvaluepair[]> {
  //     return this.http.get<Ikeyvaluepair[]>(this.baseUrl + '/furnishingtype/list');
  // }

  // getProperty(id: number) {
  //     return this.http.get<Property>(this.baseUrl + '/property/detail/'+id.toString());
  // }

  // getAllProperties(SellRent?: number): Observable<Property[]> {
  //     return this.http.get<Property[]>(this.baseUrl + '/property/list/'+SellRent.toString());
  // }
  // addProperty(property: Property) {
  //     const httpOptions = {
  //         headers: new HttpHeaders({
  //             Authorization: 'Bearer '+ localStorage.getItem('token')
  //         })
  //     };
  //     return this.http.post(this.baseUrl + '/property/add', property, httpOptions);
  // }

  addProperty(property:Property):any{
    let newProp=[property];
    //Add new property in array if newProip already exist in local storage
    if(localStorage.getItem('newProp')){
      newProp=[property, ...JSON.parse(localStorage.getItem('newProp')!)];
    }
    localStorage.setItem('newProp',JSON.stringify(newProp));
  }
  newPropID() {
      if (localStorage.getItem('PID')) {
          localStorage.setItem('PID', String(+localStorage.getItem('PID')! + 1));
          return +localStorage.getItem('PID')!;
      } else {
          localStorage.setItem('PID', '101');
          return 101;
      }
  }

  getPropertyAge(dateofEstablishment: string): string
  {
      const today = new Date();
      const estDate = new Date(dateofEstablishment);
      let age = today.getFullYear() - estDate.getFullYear();
      const m = today.getMonth() - estDate.getMonth();

      // Current month smaller than establishment month or
      // Same month but current date smaller than establishment date
      if (m < 0 || (m === 0 && today.getDate() < estDate.getDate())) {
          age --;
      }

      // Establshment date is future date
      if(today < estDate) {
          return '0';
      }

      // Age is less than a year
      if(age === 0) {
          return 'Less than a year';
      }

      return age.toString();
  }

  // setPrimaryPhoto(propertyId: number, propertyPhotoId: string) {
  //     const httpOptions = {
  //         headers: new HttpHeaders({
  //             Authorization: 'Bearer '+ localStorage.getItem('token')
  //         })
  //     };
  //     return this.http.post(this.baseUrl + '/property/set-primary-photo/'+String(propertyId)
  //         +'/'+propertyPhotoId, {}, httpOptions);
  // }

  // deletePhoto(propertyId: number, propertyPhotoId: string) {
  //     const httpOptions = {
  //         headers: new HttpHeaders({
  //             Authorization: 'Bearer '+ localStorage.getItem('token')
  //         })
  //     };
  //     return this.http.delete(this.baseUrl + '/property/delete-photo/'
  //         +String(propertyId)+'/'+propertyPhotoId, httpOptions);
  // }
}
