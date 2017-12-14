import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { Market } from "../../models/market";

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

  saveStatus:boolean = false;
  tabShopDetail: string = "sellingList";
  shopDetail:Market;

  constructor(public navCtrl: NavController, public navParams: NavParams, private photoViewer: PhotoViewer) {
    this.shopDetail = this.navParams.get('shopDetail');
    console.log(this.shopDetail);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopDetailPage');
  }

  showPhotoViewer(src:string) {
  	this.photoViewer.show(src);
  }

  save() {
    if (this.saveStatus == false) {
      this.saveStatus = true;
    } else {
      this.saveStatus = false;
    }
  }

}
