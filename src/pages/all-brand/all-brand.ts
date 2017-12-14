import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarketDataProvider, ReviewDataProvider } from "../../providers/providers";
import { Market } from "../../models/market";
import { Observable } from 'rxjs/Observable';
import { SHOP_DETAIL_PAGE } from '../pages.constants';
/**
 * Generated class for the AllBrandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-brand',
  templateUrl: 'all-brand.html',
})
export class AllBrandPage {
  
  brandData:Observable<Market[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public marketDataProvider: MarketDataProvider) {
  	this.brandData = this.marketDataProvider.getMarket();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllBrandPage');
  }

  shopDetail(shopDetail:Market) {
    this.navCtrl.push(SHOP_DETAIL_PAGE, { 'shopDetail': shopDetail });
  }
}
