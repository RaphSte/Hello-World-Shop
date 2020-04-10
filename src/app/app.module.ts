import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test/test.component';
import { CheckoutComponent } from './test/checkout/checkout.component';
import { CartComponent } from './test/cart/cart.component';
import { GoShoppingComponent } from './test/go-shopping/go-shopping.component';
import { ProductDetailsComponent } from './test/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CheckoutComponent,
    CartComponent,
    GoShoppingComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
