import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemDataProvider, MarketDataProvider } from "../../providers/providers";
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item';
import { Market } from '../../models/market';
import { MARKET_DETAIL_PAGE, SHOP_DETAIL_PAGE } from "../pages.constants";

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchType: string;
  items: Observable<Item[]>;
  itemsList: Observable<Item[]>;
  markets: Observable<Market[]>;
  marketsList: Observable<Market[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public itemData: ItemDataProvider,
    public marketData: MarketDataProvider
  ) {
    this.searchType = "item";

    this.itemsList = this.itemData.getItem().map(item => {
      item.sort((a, b) => {
        return a.name < b.name ? -1 : 1;
      });
      return item;
    });
    this.items = this.itemsList;

    this.marketsList = this.marketData.getMarket().map(market => {
      market.sort((a, b) => {
        return a.name < b.name ? -1 : 1;
      });
      return market;
    });
    this.markets = this.marketsList;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  closeSearch() {
    this.events.publish('close:search');
  }

  onSearchInput(event) {
    let keyword = event.target.value;

    if (!keyword || keyword.length <= 0) {
      this.items = this.itemsList;
      this.markets = this.marketsList;
      return;
    }

    this.items = this.items.map(item => {
      return item.filter(data => {
        if (data.name.indexOf(keyword) != -1)
          return data;
      });
    });

    this.markets = this.markets.map(market => {
      return market.filter(data => {
        if (data.name.indexOf(keyword) != -1)
          return data;
      });
    });
  }

  openItemDetail(item: Item) {
    this.navCtrl.push(MARKET_DETAIL_PAGE, { 'itemDetail': item });
  }

  openMarketDetail(market: Market) {
    this.navCtrl.push(SHOP_DETAIL_PAGE);
  }

}
