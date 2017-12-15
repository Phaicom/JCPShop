import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersDataProvider, UserDataProvider, MarketDataProvider, ItemDataProvider } from "../../providers/providers";
import { User } from "../../models/user";
import { Market } from "../../models/market";
import { Item } from "../../models/item";
import { SEARCH_PAGE, MARKET_DETAIL_PAGE } from "../pages.constants";
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the MarketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-market',
  templateUrl: 'market.html',
})
export class MarketPage {

  market: Market;
  item: Item;
  saveStatus: boolean = false;
  marketType: string = "editor";
  marketData: Observable<Market[]>;
  itemData: Observable<Item[]>;
  images = ['https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/19424322_1459121984134802_7411474100775509720_n.jpg?oh=e3a7ab6efc2a745507aa9fc8ef037198&oe=5AC0B71A',
    'https://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/22179842_10155729886927442_1150658365678161148_o.jpg?oh=1bc966f8aecbfa8017018b76226732bb&oe=5ACE8C36',
    'https://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/22220038_10155729590632442_1510877914731475593_o.jpg?oh=8991bf6721e3a01f2aa4d767c6bf3f69&oe=5AC2915F'];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public usersDataProvider: UsersDataProvider,
    public userDataProvider: UserDataProvider,
    public marketDataProvider: MarketDataProvider,
    public itemDataProvider: ItemDataProvider,
    private storage: Storage
  ) {

    this.marketData = marketDataProvider.getMarket();
    this.itemData = itemDataProvider.getItem();

  }

  addMarket() {
    let createTime: Date = new Date();
    this.market = {
      id: '',
      name: 'Pronto Denim',
      email: 'pronto@pronto.com',
      phoneNumber: '087456321',
      photoProfileURL: 'https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/23319208_10155817461657442_6165476283888494484_n.png?oh=8c6315b5524d7091925e9d9518c90cca&oe=5AB71E6A',
      photoCoverURL: 'https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/25395857_10155923206562442_1500558107066331547_n.jpg?oh=a426f77e67c41582fd89bd1c19e1d506&oe=5ACC5F7E',
      description: 'Bangkok\'s multi-brand stores bringing the best denim, tops, footwear and accessories from designers around the globe who craft them with pure passion.',
      follow: 0,
      date: createTime.toISOString(),
      mid: 'MA6012004',
      uid: []
    }

    console.log('market', this.market);
    this.marketDataProvider.addMarket(this.market);
  }

  addItem() {
    let createTime: Date = new Date();
    this.item = {
      id: '',
      name: 'AGICAL MOSH MISFITS X VANS',
      description: 'เป็นอีกหนึ่งรุ่นหายากและผลิตออกมาจำนวนไม่มาก ผลงานการร่วมมือกันระหว่าง VANS และ "MAGICAL MOSH MISFITS" แบรนด์สาย Skateboard ชื่อดังจาก Japan',
      photos: ['https://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/25188851_1495143423868953_3388154459656153105_o.jpg?oh=5a3a227ed1462fc4ae8d1639869c7e59&oe=5ABDBD32',
               'https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/25152410_1495143597202269_808426748738058543_n.jpg?oh=ff3a31d81742c0286fda665939a2b3d8&oe=5ABBBDD8',
               'https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/25158477_1495143130535649_3298199528522468186_n.jpg?oh=e702326a0b6c5b530c5966bfbbc509d1&oe=5A8C5E2E',
               'https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/25299182_1495142990535663_5411576090100505122_n.jpg?oh=e7a3def63f75a601cd5586f1c2dd020d&oe=5AD12E16'],
      view: 0,
      like: 0,
      date: createTime.toISOString(),
      amount: 11490,
      category: ['Men','Shoes'],
      inStock: 10,
      variation: 'Size(US): 6/7/8/9/10/11',
      readyToShip: 3,
      logistic: 'EMS',
      payment: 'VISA/Transfer',
      iid: 'I6012001',
      mid: 'MA6012001'
    }
    console.log('item', this.item);
    this.itemDataProvider.addItem(this.item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketPage');
  }

  openSearch() {
    this.storage.set('before:search', 1);
    this.events.publish('open:search');
  }

  openInbox() {
    this.storage.set('before:search', 1);
    this.events.publish('open:inbox');
  }

  openCart() {
    this.storage.set('before:search', 1);
    this.events.publish('open:cart');
  }

  save() {
    if (this.saveStatus == false) {
      this.saveStatus = true;
    } else {
      this.saveStatus = false;
    }
  }

  marketDetail(item:Item) {
    this.navCtrl.push(MARKET_DETAIL_PAGE, { 'itemDetail': item });
  }
}
