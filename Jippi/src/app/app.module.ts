import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustNavbarComponent } from './User/Customer/cust-navbar/navbar.component';
import { HomeComponent } from './User/Customer/home/home.component';
import { FilterComponent } from './User/Customer/home/filter/filter.component';
import { AuthentificationComponent } from './User/customer/authentification/authentification.component';
// import { SignupComponent } from './User/customer/authentification/signup/signup.component';
import { LoginComponent } from './User/customer/authentification/login/login.component';
// import { ContactUsComponent } from './User/customer/contact-us/contact-us.component';
import { ItemsComponent } from './User/Customer/home/items/items.component';
import { ItemComponent } from './User/Customer/home/items/item/item.component';
import { CompNavbarComponent } from './user/company/comp-navbar/comp-navbar.component';
import { ShopProfileComponent } from './user/company/shop-profile/shop-profile.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { CustProfileComponent } from './User/Customer/cust-profile/cust-profile.component';
import { EditProfileComponent } from './User/Customer/cust-profile/edit-profile/edit-profile.component';
import { ProfileComponent } from './User/Customer/cust-profile/profile/profile.component';

@NgModule({
  declarations: [
    // HttpClientModule,
    AppComponent,
    CustNavbarComponent,
    HomeComponent,
    FilterComponent,
    ItemComponent,
    AuthentificationComponent,
    // SignupComponent,
    LoginComponent,
    // ContactUsComponent,
    ItemsComponent,
    ItemComponent,
    CompNavbarComponent,
    ShopProfileComponent,
    UserComponent,
    CustProfileComponent,
    EditProfileComponent,
    ProfileComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule
 ],
  // imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
