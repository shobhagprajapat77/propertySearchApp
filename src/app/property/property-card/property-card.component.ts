import { Component, Input, OnInit } from '@angular/core';
import { IPropertyBase } from 'src/app/model/IPropertyBase.interface';


@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
ngOnInit(): void {

}
  @Input()
  property!: IPropertyBase;
  @Input()
  hideIcon!:Boolean;

}
