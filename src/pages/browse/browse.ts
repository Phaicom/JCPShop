import { Component } from '@angular/core';

import { Events,IonicPage, NavController, NavParams } from 'ionic-angular';
import { REVIEW_DETAIL_PAGE, SHOP_DETAIL_PAGE, STYLE_DETAIL_PAGE, ALL_BRAND_PAGE, ALL_REVIEW_PAGE, ALL_STYLE_PAGE } from '../pages.constants';


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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowsePage');
  }

  reviewDetail() {
  	this.navCtrl.push(REVIEW_DETAIL_PAGE);

  }

  shopDetail() {
    this.navCtrl.push(SHOP_DETAIL_PAGE);
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
    this.events.publish('open:search');
  }
}
