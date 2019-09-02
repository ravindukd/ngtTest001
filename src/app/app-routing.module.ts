import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { CustomersComponent } from './customers/customers.component';

import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard.ts.guard';
import { AuthGuard } from "./shared/guard/auth.guard";
import { NavComponent } from "./layouts/nav/nav.component";
import { environment } from 'src/environments/environment';
import { CustomerCreateComponent } from './customers/customer-create/customer-create.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: '', component: NavComponent, children: [
    { path: 'dashboard', component: OverviewComponent, canActivate:[AuthGuard] },
    { path: 'customers', component: CustomersComponent, canActivate:[AuthGuard], children: [
      { path: '', component: CustomerListComponent, canActivate: [AuthGuard] },
      { path: 'create', component: CustomerCreateComponent, canActivate: [AuthGuard] },
    ] },
    { path: 'tests', component: CustomersComponent, canActivate:[AuthGuard]}
  ]},
];
if (environment.prefLab.signUpRequired) {
  routes.push({ path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard] })
} else {
  routes.push({ path: 'register-user', redirectTo: 'sign-in', pathMatch: 'full' })
}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
