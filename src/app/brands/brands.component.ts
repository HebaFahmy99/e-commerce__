import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  brandsList: any[] = [];
  constructor(private _ProductsService:ProductsService) { }

  ngOnInit(): void { 
    this._ProductsService.GetBrands().subscribe((next)=>{ 
      this.brandsList = next.data;
    })
  } 


}
