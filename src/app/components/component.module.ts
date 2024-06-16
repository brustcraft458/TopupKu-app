import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MainHeaderComponent } from './main-header/main-header.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [MainHeaderComponent],
  declarations: [MainHeaderComponent]
})
export class ComponentModule {}
