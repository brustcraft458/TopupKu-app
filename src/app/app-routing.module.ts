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
    path: 'mainapp/transaction/game',
    loadChildren: () => import('./pages/mainapp/transaction/transaction.module').then( m => m.TransactionPageModule)
  },
  {
    path: 'mainapp/transaction/game/:status/:game_id',
    loadChildren: () => import('./pages/mainapp/transaction-status/transaction-status.module').then( m => m.TransactionStatusPageModule)
  },
  {
    path: 'mainapp/transaction/detail/:transaction_id',
    loadChildren: () => import('./pages/mainapp/transaction-detail/transaction-detail.module').then( m => m.TransactionDetailPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
