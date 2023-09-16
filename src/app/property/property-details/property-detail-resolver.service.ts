import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverService implements Resolve<Property |undefined> {

constructor(private router:Router,private housingService:HousingService) { }
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
Observable<Property |undefined>|Property {
    const propId = route.params['id'];
    return this.housingService.getProperty(+propId).pipe(
      catchError((err) => {
        this.router.navigate(['/']);
        return of();
      })
    );

}

}
