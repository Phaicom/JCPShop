import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { SEARCH_PAGE } from "../pages.constants";

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    private storage: Storage
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
  }

  openSearch() {
    this.storage.set('before:search', 3);
    this.events.publish('open:search');
  }

  openCamera() {
    alert("TestCam");
  }

}
