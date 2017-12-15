import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';

import { MarketDataProvider, ItemDataProvider } from "../../providers/providers";
import { User } from "../../models/user";
import { UsersDataProvider } from "../../providers/users-data/users-data";
import { Market } from "../../models/market";
import { Observable } from 'rxjs/Observable';
import { Item } from "../../models/item";
import { SEARCH_PAGE, MARKET_DETAIL_PAGE } from "../pages.constants";

/**
 * Generated class for the FollowingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-following',
  templateUrl: 'following.html',
})
export class FollowingPage {

  user:User
  shopDetail:Market;
  items:Observable<Item[]>;
  markets: Observable<Market[]>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    private storage: Storage,
    public marketDataProvider:MarketDataProvider,
    public usersData:UsersDataProvider,
    public itemDataProvider: ItemDataProvider
  ) {

     this.markets = marketDataProvider.getMarket();
    this.items = itemDataProvider.getItem();
    this.user = usersData.getUserProfile(); 
    this.markets = this.markets.map(market => {
      return market.filter(data => {
        if (data.uid.indexOf(this.user.uid) !== -1) {
          return data;
        }
      })
    });

   

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FollowingPage');
  }

  openSearch() {
    this.storage.set('before:search', 0);
    this.events.publish('open:search');
  }

  openInbox() {
    this.storage.set('before:search', 0);
    this.events.publish('open:inbox');
  }

  goToShopdetail(item:Item){
    this.navCtrl.push(MARKET_DETAIL_PAGE, { 'itemDetail': item });
  }

}
