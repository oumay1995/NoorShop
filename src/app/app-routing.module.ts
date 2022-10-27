import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogComponent } from './components/blog/blog.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ShopDetailsComponent } from './components/shop-details/shop-details.component';
import { ShopGridComponent } from './components/shop-grid/shop-grid.component';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardCategorieComponent } from './dashboard/dashboard-categorie/dashboard-categorie.component';
import { DashboardProduitComponent } from './dashboard/dashboard-produit/dashboard-produit.component';
import { DepartementsComponent } from './dashboard/departements/departements.component';

const routes: Routes = [ 
  {path : "", component : HomeComponent},
  {path : "login", component : LoginComponent},
  {path : "signUp", component : SignupComponent},
  {path : "shopGrid", component : ShopGridComponent},
  {path : "shopdetails", component : ShopDetailsComponent},
  {path : "shopingCart", component : ShopingCartComponent},
  {path : "checkout", component : CheckoutComponent},
  {path : "blogDetails", component : BlogDetailsComponent},
  {path : "blog", component : BlogComponent},
  {path : "contact", component : ContactComponent},
  {path : "Departement", component : DepartementsComponent},
  {path : "dashboardCategorie", component : DashboardCategorieComponent},
  {path : "dashboardProduit", component : DashboardProduitComponent},
  {path : "editCategorie/:id", component : DepartementsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
