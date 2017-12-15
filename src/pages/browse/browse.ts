import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { REVIEW_DETAIL_PAGE, SHOP_DETAIL_PAGE, STYLE_DETAIL_PAGE, ALL_BRAND_PAGE, ALL_REVIEW_PAGE, ALL_STYLE_PAGE } from '../pages.constants';
import { MarketDataProvider, ReviewDataProvider } from "../../providers/providers";
import { Market } from "../../models/market";
import { Review } from "../../models/review";
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the BrowsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-browse',
  templateUrl: 'browse.html',
})
export class BrowsePage {

    brandData:Observable<Market[]>;
    review:Review;
    reviews:Observable<Review[]>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public marketDataProvider: MarketDataProvider,
    public reviewDataProvider: ReviewDataProvider,
    private storage: Storage
  ) {
    this.brandData = this.marketDataProvider.getMarket();
    this.reviews = this.reviewDataProvider.getReview();
  }

  addItem() {
    let createTime: Date = new Date();
    this.review = {
      id: '',
      title: 'แฟชั่นเครื่องหนัง กำลังมาแรงแซงทุกแนว',
      photoHeader: 'https://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/22179842_10155729886927442_1150658365678161148_o.jpg?oh=1bc966f8aecbfa8017018b76226732bb&oe=5ACE8C36',
      content: '<img src="https\://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/15844564_10211355389658669_1564886958092512457_o.jpg?oh=dec8ee778a17bb1b65344a4c7097203b&oe=5ABA80FE"> \
    <img src="https\://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/15844683_10211355388898650_4825421167843296667_o.jpg?oh=ec19a1040d0d03f11213be50d67296e8&oe=5ACC6558"> \
    <img src="https\://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/15844439_10211355390098680_8900566751770514630_o.jpg?oh=e29099f4f73dd563dad9cc311605512a&oe=5ACB6EC7"> \
    <img src="https\://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/15844774_10211355386578592_217547717920245768_o.jpg?oh=a7aabf2621cff221e8d791d3a41a665a&oe=5AD0828F"> \
    <img src="https\://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/15896173_10211355381698470_5139730546103288499_o.jpg?oh=db5a19f4117c20eb125134607d799105&oe=5ACCA817"> \
    <img src="https\://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/15896204_10211355385298560_8263769327601698445_o.jpg?oh=7276c7c4509d9d553250a302da7c4e5e&oe=5AD14381"> \
    <img src="https\://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/15799858_10211355388018628_6129378754408540873_o.jpg?oh=cae774347f481c387ab3820d916aade1&oe=5AC2D0AB">'
    }
    console.log('review', this.review);
    this.reviewDataProvider.addReview(this.review);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowsePage');
  }

  reviewDetail(review:Review) {
    this.navCtrl.push(REVIEW_DETAIL_PAGE, { 'reviewDetail': review });
  }

  shopDetail(shopDetail:Market) {
    this.navCtrl.push(SHOP_DETAIL_PAGE, { 'shopDetail': shopDetail });
  }

  styleDetail() {
    this.navCtrl.push(STYLE_DETAIL_PAGE);
  }

  allBrand() {
    this.navCtrl.push(ALL_BRAND_PAGE);
  }

  allReview() {
    this.navCtrl.push(ALL_REVIEW_PAGE);
  }

  allStyle() {
    this.navCtrl.push(ALL_STYLE_PAGE);
  }

  openSearch() {
    this.storage.set('before:search', 2);
    this.events.publish('open:search');
  }

  openInbox() {
    this.storage.set('before:search', 2);
    this.events.publish('open:inbox');
  }

  openCart() {
    this.storage.set('before:search', 2);
    this.events.publish('open:cart');
  }
}
