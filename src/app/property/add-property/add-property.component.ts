import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from 'src/app/model/iproperty';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
@ViewChild('Form') proprtyForm:any;
@ViewChild('Formtabs') staticTabs?: TabsetComponent;

propertyTypes:Array<string>=['House','Apartment','Duplex']
furnishTypes:Array<string>=['Fully','Semi', 'Unfurnished']
entranceTypes:Array<string>=['East','West','North','South']

propertyView:IProperty={
  Id:0,
  Name:'',
  Price:0,
  SellRent:0,
  PType:'',
  FType:'',
  BHK:0,
  BuiltArea:0,
  City:'',
  RTM:0
};



constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onBack(){
    this.router.navigate(['/']);
  }
  onSubmit(){

    console.log(this.proprtyForm);
  }

  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }
}
