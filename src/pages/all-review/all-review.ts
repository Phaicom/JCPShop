import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReviewDataProvider } from "../../providers/providers";
import { Review } from "../../models/review";
import { Observable } from 'rxjs/Observable';
import { REVIEW_DETAIL_PAGE } from '../pages.constants';
/**
 * Generated class for the AllReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-review',
  templateUrl: 'all-review.html',
})
export class AllReviewPage {
  
  reviews:Observable<Review[]>

  constructor(public navCtrl: NavController, public reviewDataProvider: ReviewDataProvider, public navParams: NavParams) {
  	this.reviews = this.reviewDataProvider.getReview();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllReviewPage');
  }

  reviewDetail(review:Review) {
    this.navCtrl.push(REVIEW_DETAIL_PAGE, { 'reviewDetail': review });
  }

}
