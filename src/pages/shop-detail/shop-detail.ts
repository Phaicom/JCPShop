import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { Market } from "../../models/market";
<<<<<<< HEAD
import { UserDataProvider } from "../../providers/user-data/user-data";
import { User } from "../../models/user";
=======
import { Observable } from 'rxjs/Observable';
import { MarketDataProvider, ItemDataProvider } from "../../providers/providers";
import { Item } from "../../models/item";
>>>>>>> 2a4a0202731471df3e6608ae81204fa8ae1f36e3

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

  user:User;
  saveStatus:boolean = false;
  tabShopDetail: string = "sellingList";
  shopDetail:Market;
  items:Observable<Item[]>;

<<<<<<< HEAD
  constructor(public navCtrl: NavController, public navParams: NavParams, private photoViewer: PhotoViewer, public userData:UserDataProvider) {
    this.shopDetail = this.navParams.get('shopDetail');
    this.user = userData.getUser();
=======
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private photoViewer: PhotoViewer,
              public itemDataProvider: ItemDataProvider,
              public marketDataProvider: MarketDataProvider) {
    this.shopDetail = this.navParams.get('shopDetail');
    this.items = this.itemDataProvider.getItem();
    this.items = this.items.map(item => {
      return item.filter(data => {
        if (this.shopDetail.mid == data.mid) {
          return data;
        }
      })
    });
>>>>>>> 2a4a0202731471df3e6608ae81204fa8ae1f36e3
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

  following(){
    
  }

}
