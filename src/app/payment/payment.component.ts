import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentForm:FormGroup = new FormGroup({ 
    details:new FormControl(null,[Validators.required,Validators.maxLength(25),Validators.minLength(5)]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-z]{3,25}$/)])
  })
  constructor(private _CartService:CartService) { }

  ngOnInit(): void {
  } 
  navigateToStripePage(url:string){ 
    window.location.href = url;
  }
  handlePaymentForm(paymentForm:FormGroup){ 
    this._CartService.OnlinePayment(paymentForm.value,'64ee4e5018b1d9a11097b0af').subscribe((response)=>{ 
      this.navigateToStripePage(response.session.url);      
    })
    
  }
}
