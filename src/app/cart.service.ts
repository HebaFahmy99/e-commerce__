import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService { 
  numOfCartItems = new BehaviorSubject(0);

  _header:any = {token: localStorage.getItem('userToken')}
  constructor(private _HttpClient:HttpClient) {  
    this.GetLoggedUser().subscribe((data)=>{ 
      this.numOfCartItems.next(data.numOfCartItems)
    })
  } 

  addToCart(productId:string):Observable<any>{ 
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart', 
    {productId:productId}, {headers:this._header} )
  }
  GetLoggedUser():Observable<any>{ 
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart', 
    {headers:this._header} )
  }

  RemoveCartItem(productId:string):Observable<any>{ 
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {headers:this._header} ) 
  }
  UpdateCartItem(productId:string, _count:number):Observable<any>{ 
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {count:_count},
    {headers:this._header} ) 
  } 
  OnlinePayment(_shippingAddress:any, cartId:string):Observable<any>{ 
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`, 
    {shippingAddress: _shippingAddress}, 
    {headers: this._header})
  }
  
}
