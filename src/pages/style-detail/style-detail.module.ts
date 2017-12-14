import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StyleDetailPage } from './style-detail';

@NgModule({
  declarations: [
    StyleDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(StyleDetailPage),
  ],
})
export class StyleDetailPageModule {}
