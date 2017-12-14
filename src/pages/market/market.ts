import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersDataProvider, UserDataProvider, MarketDataProvider } from "../../providers/providers";
import { User } from "../../models/user";
import { Market } from "../../models/market";
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
  saveStatus: boolean = false;
  marketType: string = "editor";
  marketData: Observable<Market[]>;

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
    private storage: Storage
  ) {

    this.marketData = marketDataProvider.getMarket();





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

  marketDetail() {
    this.navCtrl.push(MARKET_DETAIL_PAGE);
  }
}
