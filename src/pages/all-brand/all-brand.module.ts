import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllBrandPage } from './all-brand';

@NgModule({
  declarations: [
    AllBrandPage,
  ],
  imports: [
    IonicPageModule.forChild(AllBrandPage),
  ],
})
export class AllBrandPageModule {}
