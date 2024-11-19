import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './features/products/products.component';
import { CustomersComponent } from './features/customers/customers.component';
import { OrdersComponent } from './features/orders/orders.component';
import { ProductFormComponent } from './features/products/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent, // Certifique-se de que todos os componentes usados estão listados aqui
    ProductsComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Aqui
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
