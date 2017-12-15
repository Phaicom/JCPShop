import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { MODAL_PAGE, SHOP_DETAIL_PAGE } from '../pages.constants';
import { Item } from "../../models/item";
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { MarketDataProvider, ItemDataProvider } from "../../providers/providers";
import { Market } from "../../models/market";
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the MarketDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-market-detail',
  templateUrl: 'market-detail.html',
})
export class MarketDetailPage {

  itemDetail:Item;
  markets:Observable<Market[]>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public modalCtrl: ModalController,
              public photoViewer: PhotoViewer,
              public itemDataProvider: ItemDataProvider,
              public marketDataProvider: MarketDataProvider) {
    this.itemDetail = this.navParams.get('itemDetail');
    this.plusView(); // plus view everytime when user click
    this.markets = this.marketDataProvider.getMarket();

    this.markets = this.markets.map(market => {
      return market.filter(data => {
        if (this.itemDetail.mid == data.mid) {
          return data;
        }
      })
    });

    console.log(this.markets);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketDetailPage');
  }

  presentModal(picture:string) {
    let modal = this.modalCtrl.create(MODAL_PAGE, {'picture': picture});
    modal.present();
  }

  showPhotoViewer(src:string) {
    this.photoViewer.show(src);
  }

  plusView() {
    this.itemDetail.view++;
    this.itemDataProvider.updateItem(this.itemDetail);
  }

  goShopDetailPage(shop:Market) {
    this.navCtrl.push(SHOP_DETAIL_PAGE, { 'shopDetail': shop });
  }

}
