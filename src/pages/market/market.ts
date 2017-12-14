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
  images = ['https://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/14351999_1199453586757308_2142988214076800661_o.jpg?oh=78f173fc0c33025d81641d4bcf479c78&oe=5AC1F219',
    'https://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/14258109_1181056208597046_1010626863625118272_o.jpg?oh=0b08a7f8b84b48a46ce78e542d54ac0b&oe=5A9168FB',
    'https://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/13522775_1042965985739403_3268806380087284009_o.jpg?oh=25f6db84d173c2c77136f662e825a47d&oe=5AD468F7'];


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


    // this.marketData.forEach(function (element) {
    //   console.log(element);
    // });
  }

  addMarket() {
    let createTime: Date = new Date();
    this.market = {
      id: '',
      name: 'Peter Sneaker',
      email: 'peter@peter.com',
      phoneNumber: '0812345678',
      photoProfileURL: 'https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/23471922_1466938716689424_6171403569327958054_n.jpg?oh=4fa0b540bae022c04a2054ca6fc7aec9&oe=5ACE5FAD',
      photoCoverURL: 'https://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/24799511_1488122064571089_8968755720877895570_o.jpg?oh=f7212133364a717d93a13992ef2f62d3&oe=5A88FA0E',
      description: 'จำหน่ายรองเท้าแบรนด์เนม limited edition สนใจรุ่นไหน แบรนด์อะไร สอบถามเข้ามาได้เลยครับ',
      date: createTime.toISOString(),
      mid: 'MA6012001'
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
