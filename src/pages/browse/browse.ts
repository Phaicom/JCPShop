import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import { ReviewDetailPage } from '../review-detail/review-detail';
import { ShopDetailPage } from '../shop-detail/shop-detail';
import { StyleDetailPage } from '../style-detail/style-detail';
import { AllBrandPage } from '../all-brand/all-brand';
import { AllReviewPage } from '../all-review/all-review';
import { AllStylePage } from '../all-style/all-style';
import { SEARCH_PAGE } from "../pages.constants";
=======


import { REVIEW_DETAIL_PAGE, SHOP_DETAIL_PAGE, STYLE_DETAIL_PAGE, ALL_BRAND_PAGE, ALL_REVIEW_PAGE, ALL_STYLE_PAGE } from '../pages.constants';
>>>>>>> browse

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowsePage');
  }

  reviewDetail() {
<<<<<<< HEAD
    this.navCtrl.push(ReviewDetailPage);
=======
  	this.navCtrl.push(REVIEW_DETAIL_PAGE);
>>>>>>> browse
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
    this.navCtrl.push(SEARCH_PAGE);
  }
}
