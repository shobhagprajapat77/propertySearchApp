import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any>=[
    {
      "Id":1,
      "Name":"Birla House",
      "Type":"House",
      "Price": 120000
   },
   {
    "Id":2,
    "Name":"jain House",
    "Type":"House",
    "Price": 1000
 },
 {
  "Id":3,
  "Name":"ramkun House",
  "Type":"House",
  "Price": 140000
},
{
  "Id":4,
  "Name":"shyam House",
  "Type":"House",
  "Price": 13000
},
{
  "Id":5,
  "Name":"ram House",
  "Type":"House",
  "Price": 1280000
},
{
  "Id":6,
  "Name":"Ambani House",
  "Type":"House",
  "Price": 1200000
}

]

  constructor() { }

  ngOnInit(): void {
  }

}
