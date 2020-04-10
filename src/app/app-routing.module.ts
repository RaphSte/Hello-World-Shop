import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test/test.component';
import { CheckoutComponent } from './test/checkout/checkout.component';
import { CartComponent } from './test/cart/cart.component';
import { GoShoppingComponent } from './test/go-shopping/go-shopping.component';
import { ProductDetailsComponent } from './test/product-details/product-details.component';

const routes: Routes = [{path: "test", component: TestComponent}, {path: "checkout", component: CheckoutComponent}, {path: "cart", component: CartComponent}, {path: "go-shopping", component: GoShoppingComponent}, {path: "product-details", component: ProductDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
