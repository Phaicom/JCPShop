import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { MODAL_PAGE } from '../pages.constants';
import { Item } from "../../models/item";
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { MarketDataProvider } from "../../providers/providers";
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
  market:Observable<Market[]>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public modalCtrl: ModalController,
              public photoViewer: PhotoViewer,
              public marketDataProvider: MarketDataProvider) {
    this.itemDetail = this.navParams.get('itemDetail');
    this.market = this.marketDataProvider.getMarket();

    console.log(this.itemDetail);
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

}
