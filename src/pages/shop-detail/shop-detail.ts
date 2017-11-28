import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';

/**
 * Generated class for the ShopDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop-detail',
  templateUrl: 'shop-detail.html',
})
export class ShopDetailPage {
  tabShopDetail: string = "sellingList";

  constructor(public navCtrl: NavController, public navParams: NavParams, private photoViewer: PhotoViewer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopDetailPage');
  }

  showPhotoViewer(src:string) {
  	this.photoViewer.show(src);
  }

}
