import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AuthGuard } from './common/guards/auth-guard.service';
import { NoAuthGuard } from './common/guards/no-auth-guard.service';


const routes: Routes = [
  // { path: '', component: LoginComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: SignupComponent, pathMatch: 'full'},
      { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard]},
      { path: 'signup', component: SignupComponent, canActivate: [NoAuthGuard] },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
