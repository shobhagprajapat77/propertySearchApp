import { Component, OnInit } from '@angular/core';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { AlertServiceService } from '../services/alert-service.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  //providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class NavBarComponent implements OnInit {
  loggedUser!: string;
  constructor(private alertService:AlertServiceService) { }

  ngOnInit() {
  }

  onlogin(){
    this.loggedUser= localStorage.getItem('token')!;
    return this.loggedUser;
  }
  onLogout(){
    localStorage.removeItem('token');
    this.alertService.success("You logged Successfully");
  }
}
