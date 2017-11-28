import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { SEARCH_PAGE } from "../pages.constants";

/**
 * Generated class for the FollowingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-following',
  templateUrl: 'following.html',
})
export class FollowingPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FollowingPage');
  }

  openSearch() {
    this.events.publish('open:search');
  }

}
