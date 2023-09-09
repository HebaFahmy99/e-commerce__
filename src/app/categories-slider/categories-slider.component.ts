import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories-slider',
  templateUrl: './categories-slider.component.html',
  styleUrls: ['./categories-slider.component.scss']
})
export class CategoriesSliderComponent implements OnInit {
  categoriesList : any[] =[];
  constructor(private _ProductsService:ProductsService) { }

  ngOnInit(): void { 
    this._ProductsService.GetCategories().subscribe((response)=>{ 
      this.categoriesList = response.data;
})
  } 
  customOptions: OwlOptions = { 
    autoplay: true,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false, 
    navSpeed: 300,
    navText: ['', ''],
    responsive: {
      0: {
        items: 7,
      }
    },
    nav: false
  }

}
