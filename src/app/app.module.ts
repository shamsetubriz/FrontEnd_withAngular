import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NumberBlockComponent } from './number-block/number-block.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GrangChildComponent } from './grang-child/grang-child.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NumbersComponent } from './numbers/numbers.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NumberBlockComponent,
    ParentComponent,
    ChildComponent,
    GrangChildComponent,
    TopnavComponent,
    SigninComponent,
    SignupComponent,
    MembersComponent,
    ProductsListComponent,
    NotFoundComponent,
    NumbersComponent,
    ProductDetailsComponent,
    EmployeesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
