import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NumberBlockComponent } from './number-block/number-block.component';
import { NumbersComponent } from './numbers/numbers.component';
import { ParentComponent } from './parent/parent.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'products',
    component: ProductsListComponent
  },
  {
    path: 'members',
    component: MembersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'numbers',
    component: NumberBlockComponent
  },
  {
    path: 'products/:productId',
    component: ProductDetailsComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
