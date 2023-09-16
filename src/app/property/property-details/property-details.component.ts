import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];
  public propertyId!:number;
  property=new Property();
  constructor(private route:ActivatedRoute, private router:Router,private housingService: HousingService) { }

  ngOnInit(): void {
    this.propertyId=Number(this.route.snapshot.params['id']);
    this.route.data.subscribe(
      (data) => {
          this.property = data['prp'];
      }
  );
    //  this.route.params.subscribe(
    //   (params)=>{
    //     this.propertyId=+params['id'];
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       data=>{
    //         this.property!=data;
    //       }
    //     )
    //   }
    //  );

    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview:true
      }
    ];

    this.galleryImages = [
      {
        small: 'src/assets/image/prop-2.jpg',
        medium: 'src/assets/image/prop-2.jpg',
        big: 'src/assets/image/prop-2.jpg'
      },
      {
        small: 'src/assets/image/prop-3.jpg',
        medium: 'src/assets/image/prop-3.jpg',
        big: 'src/assets/image/prop-3.jpg'
      },
      {
        small: 'src/assets/image/prop-4.jpg',
        medium: 'src/assets/image/prop-4.jpg',
        big: 'src/assets/image/prop-4.jpg'
      },
      {
        small: 'src/assets/image/prop-5.jpg',
        medium: 'src/assets/image/prop-5.jpg',
        big: 'src/assets/image/prop-5.jpg'
      },
      {
        small: 'src/assets/image/prop-6.jpg',
        medium: 'src/assets/image/prop-6.jpg',
        big: 'src/assets/image/prop-6.jpg'
      },

    ];

  }
  onSelectNext(){
   this.propertyId+=1;
    this.router.navigate(['property-details',this.propertyId]);
  }
}
