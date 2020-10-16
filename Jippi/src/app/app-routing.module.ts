import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './User/Customer/home/home.component';
import { ContactUsComponent } from './User/Customer/Contact-us/contact-us.component';
import { LoginComponent } from './User/customer/authentification/login/login.component';
import { SignupComponent } from './User/customer/authentification/signup/signup.component';

// CREATE THE PATHS OF ALL THE COMPONENTS FOR THE NAVBAR.
const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "contact", component: ContactUsComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
