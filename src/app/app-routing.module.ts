import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/tmp/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'topup',
    loadChildren: () => import('./pages/tmp/topup/topup.module').then( m => m.TopupPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/tmp/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'register-verification',
    loadChildren: () => import('./pages/auth/register-verification/register-verification.module').then( m => m.RegisterVerificationPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
