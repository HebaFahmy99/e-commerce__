import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartDetails:any = null; 
  constructor(private _CartService:CartService, private _ToastrService:ToastrService,private _Router:Router){ 
    this._CartService.GetLoggedUser().subscribe((response)=>{  
      this.cartDetails = response.data; 
      this._CartService.numOfCartItems.next(response.numOfCartItems);
      console.log(response); 
    }) 
  }
  
  removeCartItem(productId:string){ 
    this._CartService.RemoveCartItem(productId).subscribe({ 
      next:(response)=>{   
        this._CartService.numOfCartItems.next(response.numOfCartItems);
        this._ToastrService.success('Item has been deleted successfully!')
        this.cartDetails = response.data;   
      }
    })
  }
  upadteCartItem(productId:string, count:number){ 
 
    this._CartService.UpdateCartItem(productId,count).subscribe({ 
      next:(response)=>{   
        this._ToastrService.success('Qunatity been updated successfully!')
        this.cartDetails = response.data;   
      }
    })
  }
  ngOnInit(): void {  


  }  


}
