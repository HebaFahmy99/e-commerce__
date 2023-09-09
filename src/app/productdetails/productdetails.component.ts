import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
 
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  productId : any; 
  productDetails:any;
  constructor(protected _ActivatedRoute:ActivatedRoute, private _ProductsService:ProductsService) { }
  

  ngOnInit(): void { 
    this._ActivatedRoute.paramMap.subscribe((params)=>{ 
      this.productId = params.get('id'); 
      this._ProductsService.GetProductDetails(this.productId).subscribe((response)=>{ 
        this.productDetails = response.data
        
      });
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
        items: 1,
      }
    },
    nav: true
  }

}
