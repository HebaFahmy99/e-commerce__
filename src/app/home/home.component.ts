import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products:Array<any> = [];  
  productsImages:Array<any> = [];
  constructor(private _ProductsService:ProductsService, private _CartService:CartService, 
    private _ToastrService:ToastrService) { }

  ngOnInit(): void {
    this._ProductsService.GetProducts().subscribe({ 
      next:(response)=>{  
        this.products = response.data;          
      }
    })
  } 
  addToCart(productId:string){ 
    this._CartService.addToCart(productId).subscribe((response)=>{ 
      this._CartService.numOfCartItems.next(response.numOfCartItems)
      this._ToastrService.success(`${response.message}`)      
    })
  }

}
