import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReviewDataProvider } from "../../providers/providers";
import { Review } from "../../models/review";
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ReviewDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review-detail',
  templateUrl: 'review-detail.html',
})
export class ReviewDetailPage {
  
  reviewDetail:Review;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.reviewDetail = this.navParams.get('reviewDetail');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewDetailPage');
  }

}
