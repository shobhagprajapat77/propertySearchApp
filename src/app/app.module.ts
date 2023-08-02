import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { Routes,RouterModule } from '@angular/router';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { AuthService } from './services/auth.service';
import { UserserviceService } from './services/userservice.service';
import { AlertServiceService } from './services/alert-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
const appRoutes:Routes=[
  {
    path:'add-property',
    component:AddPropertyComponent
  },
  {
    path:'user/login',
    component:UserLoginComponent
  },
  {
    path:'user/register',
    component:UserRegisterComponent
  },
  {
    path:'property-details/:id',
    component:PropertyDetailsComponent
  },
  {
    path:'',
    component:PropertyListComponent
  },
  {
    path:'**',
    component:PropertyListComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
      NavBarComponent,
      AddPropertyComponent,
      PropertyDetailsComponent,
      UserLoginComponent,
      UserRegisterComponent

   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    HousingService,
    AuthService,
    UserserviceService,
    AlertServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
