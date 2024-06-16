import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/components/component.module';

import { TransactionStatusPageRoutingModule } from './transaction-status-routing.module';

import { TransactionStatusPage } from './transaction-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    TransactionStatusPageRoutingModule
  ],
  declarations: [TransactionStatusPage]
})
export class TransactionStatusPageModule {}
