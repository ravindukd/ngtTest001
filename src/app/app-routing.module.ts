import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { CustomersComponent } from './customers/customers.component';

import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { AuthGuard } from "./shared/guard/auth.guard";

const routes: Routes = [
  { path: '', redirectTo : '/dashboard', pathMatch : 'full' },
  { path: 'dashboard', component: OverviewComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'tests', component: CustomersComponent },
  { path: 'auth', children : [
    { path:'', redirectTo : 'sign-in', pathMatch : 'full' },
    { path: 'sign-in', component:SignInComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'register-user', component:SignUpComponent },
    { path: 'verify-email-address', component: VerifyEmailComponent }
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
