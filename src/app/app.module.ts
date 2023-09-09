import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductdetailsComponent } from './productdetails/productdetails.component'
import {RouterModule} from '@angular/router' 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'  
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { CategoriesSliderComponent } from './categories-slider/categories-slider.component';
import { ToastrModule } from 'ngx-toastr';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CartComponent,
    BrandsComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    NavbarComponent,
    ProductdetailsComponent,
    MainSliderComponent,
    CategoriesSliderComponent,
    PaymentComponent, 
    
    
    
  ],
  imports: [
  BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
    RouterModule,   
    BrowserAnimationsModule, 
    CarouselModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
