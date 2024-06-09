import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing/login',
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
    path: 'landing/login',
    loadChildren: () => import('./pages/landing/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'landing/register',
    loadChildren: () => import('./pages/landing/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'landing/register-verification',
    loadChildren: () => import('./pages/landing/register-verification/register-verification.module').then( m => m.RegisterVerificationPageModule)
  },
  {
    path: 'mainapp/transaction',
    loadChildren: () => import('./pages/mainapp/transaction/transaction.module').then( m => m.TransactionPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
