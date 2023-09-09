import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators} from '@angular/forms';
import { AuthService } from '../auth.service'; 
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit { 
  isLoading:boolean = false; 
  ErrorMsg:string = '';
  RegisterForm:FormGroup = new FormGroup({ 
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),  
    email:new FormControl(null,[Validators.required,Validators.email]), 
    password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]), 
    rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]), 
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
  },{validators: this.passwordsMatch})
  constructor(private _AuthService:AuthService, private _Router:Router, 
    private _ToastrService:ToastrService) { }

  handleRegister(RegisterForm:FormGroup){  
    this.isLoading = true; 
    
    this._AuthService.Register(RegisterForm.value).subscribe({ 
      next:(response)=>{ 
        if(response.message === 'success'){  
          this._ToastrService.success(`${response.message}`)
          this._Router.navigate(['/login']);
        }
      }, 
      error:(err)=>{ 
        this.isLoading = false;
        this._ToastrService.error('Failed'); 
        if(RegisterForm.get('password')?.value !== RegisterForm.get('rePassword')?.value)
        { 

          this.ErrorMsg = err.error.errors.msg;
        }
        else{ 
          this.ErrorMsg = err.error.message;

        }
      } 
    })
    
  }
  passwordsMatch(RegisterForm:any){ 
    let passwordControl = RegisterForm.get('password'); 
    let rePasswordControl = RegisterForm.get('rePassword'); 
    if(passwordControl.value === rePasswordControl.value){return null} 
    else{ 
      rePasswordControl.setErrors({MatchError: 'Password and Confirmation Password are not matched!'}) 
      return {MatchError: 'Password and Confirmation Password are not matched!'}
    }
  }
  ngOnInit(): void {
  }

}
