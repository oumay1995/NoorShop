import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { ProductComponent } from './components/product/product.component';
import { BlogComponent } from './components/blog/blog.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopGridComponent } from './components/shop-grid/shop-grid.component';
import { ShopGridProductComponent } from './components/shop-grid-product/shop-grid-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ShopDetailsComponent } from './components/shop-details/shop-details.component';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { DepartementsComponent } from './dashboard/departements/departements.component';
import { HttpClientModule } from '@angular/common/http';
import { CategorieComponent } from './components/categorie/categorie.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { DashboardCategorieComponent } from './dashboard/dashboard-categorie/dashboard-categorie.component';
import { DashboardProduitComponent } from './dashboard/dashboard-produit/dashboard-produit.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    CategoriesComponent,
    FeaturedComponent,
    ProductComponent,
    BlogComponent,
    SignupComponent,
    LoginComponent,
    ShopGridComponent,
    ShopGridProductComponent,
    ShopDetailsComponent,
    ShopingCartComponent,
    CheckoutComponent,
    BlogDetailsComponent,
    ContactComponent,
    DepartementsComponent,
    CategorieComponent,
    NavbarComponent,
    DashboardCategorieComponent,
    DashboardProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCarouselModule.forRoot(),
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {} 