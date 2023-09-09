import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable,BehaviorSubject} from 'rxjs'
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient, private _Router:Router) { 
    if(localStorage.getItem('userToken')!== null){ 
      this.DecodeUserData();
    }
   }  

  DecodeUserData(){ 
    let encodedToken = JSON.stringify(localStorage.getItem('userToken')); 
    let decodedToken:any = jwtDecode(encodedToken); 
    this.userData.next(decodedToken); 
    console.log(this.userData);
    
  }

  Register(UserData:Object):Observable<any>{ 
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',UserData);
  }
  Login(UserData:Object):Observable<any>{ 
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',UserData);
  } 
  logOut(){ 
    localStorage.removeItem('userToken'); 
    this.userData.next(null); 
    this._Router.navigate(['/login'])
  }
}
