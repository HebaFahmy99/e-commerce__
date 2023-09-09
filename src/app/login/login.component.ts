import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators} from '@angular/forms';
import { AuthService } from '../auth.service'; 
import { Router } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading:boolean = false; 
  ErrorMsg:string = '';
  LoginForm:FormGroup = new FormGroup({ 
    email:new FormControl(null,[Validators.required,Validators.email]), 
    password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]), 
  })
  constructor(private _AuthService:AuthService, private _Router:Router,
    private _ToastrService:ToastrService) { }

  handleRegister(LoginForm:FormGroup){  
    this.isLoading = true; 
    
    this._AuthService.Login(LoginForm.value).subscribe({ 
      next:(response)=>{ 
        if(response.message === 'success'){ 
          localStorage.setItem('userToken',response.token); 
          this._AuthService.DecodeUserData();
          this._ToastrService.success(`${response.message}`)
          this._Router.navigate(['/home']);
        }
      }, 
      error:(err)=>{ 
        this.isLoading = false;  
        
       this.ErrorMsg = err.error.message;
       
      } 
    })
    
  }

  ngOnInit(): void {
  }

}
