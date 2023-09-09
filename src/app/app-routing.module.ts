import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { URLAuthGuard } from './url-auth.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [ 
  {path:"", redirectTo:'home', pathMatch: "full" }, 
  {path:"home",  canActivate:[URLAuthGuard], component:HomeComponent,title:"Home"}, 
  {path:"about", canActivate:[URLAuthGuard],component:AboutComponent,title:"About"}, 
  {path:"cart", canActivate:[URLAuthGuard],component:CartComponent,title:"Cart"}, 
  {path:"brands",canActivate:[URLAuthGuard],component:BrandsComponent,title:"Brands"}, 
  {path:"payment",canActivate:[URLAuthGuard],component:PaymentComponent,title:"Check Out"}, 
  {path:"productdetails/:id", canActivate:[URLAuthGuard],component:ProductdetailsComponent,title:"Product details"}, 
  {path:"login",component:LoginComponent,title:"Login"}, 
  {path:"register",component:RegisterComponent,title:"Registeration"}, 
  {path:"**",component:NotfoundComponent,title:"Error404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
