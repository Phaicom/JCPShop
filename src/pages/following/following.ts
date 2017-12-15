import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
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
    public events: Events,
    private storage: Storage
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FollowingPage');
  }

  openSearch() {
    this.storage.set('before:search', 0);
    this.events.publish('open:search');
  }

  openInbox() {
    this.storage.set('before:search', 0);
    this.events.publish('open:inbox');
  }

  openCart() {
    this.storage.set('before:search', 0);
    this.events.publish('open:cart');
  }

}
