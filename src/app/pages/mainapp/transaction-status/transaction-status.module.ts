import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionStatusPageRoutingModule } from './transaction-status-routing.module';

import { TransactionStatusPage } from './transaction-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionStatusPageRoutingModule
  ],
  declarations: [TransactionStatusPage]
})
export class TransactionStatusPageModule {}
