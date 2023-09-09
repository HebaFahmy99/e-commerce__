import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:boolean = false; 
  CartItems: number = 0;
  
  constructor(private _AuthService:AuthService,private _CartService:CartService) {   
    _CartService.numOfCartItems.subscribe((next)=>{ 
      this.CartItems = next;
    }) 

    this._AuthService.userData.subscribe({ 
      next:()=>{ 
        if(this._AuthService.userData.getValue() != null){
          this.isLoggedIn = true;
        } 
        else{ 
          this.isLoggedIn = false;
        }
      }
    }) 
  }

  logOut(){ 
    this._AuthService.logOut();
  }
  ngOnInit(): void { 


  }

}
