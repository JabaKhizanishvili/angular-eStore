import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdDetailsComponent } from './components/prod-details/prod-details.component';
import { HomeComponent } from './components/home/home.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FooterComponent } from './components/footer/footer.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoginComponent } from './components/login/login.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountdownModule } from 'ngx-countdown';
import { ContactusComponent } from './components/contactus/contactus.component';
import { MatRadioModule } from '@angular/material/radio';
import { OrdersComponent } from './components/orders/orders.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProdDetailsComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    ContactusComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSliderModule,
    MatCheckboxModule,
    CarouselModule,
    CountdownModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
