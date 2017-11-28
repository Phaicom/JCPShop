import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReviewDetailPage } from '../review-detail/review-detail';
import { ShopDetailPage } from '../shop-detail/shop-detail';
import { StyleDetailPage } from '../style-detail/style-detail';
import { AllBrandPage } from '../all-brand/all-brand';
import { AllReviewPage } from '../all-review/all-review';
import { AllStylePage } from '../all-style/all-style';

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
  	this.navCtrl.push(ReviewDetailPage);
  }

  shopDetail() {
    this.navCtrl.push(ShopDetailPage);
  }

  styleDetail() {
    this.navCtrl.push(StyleDetailPage);
  }

  allBrand() {
    this.navCtrl.push(AllBrandPage);
  }

  allReview() {
    this.navCtrl.push(AllReviewPage);
  }

  allStyle() {
    this.navCtrl.push(AllStylePage);
  }

}
