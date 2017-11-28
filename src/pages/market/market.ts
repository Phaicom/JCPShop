import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersDataProvider, UserDataProvider } from "../../providers/providers";
import { Observable } from 'rxjs/Observable';
import { User } from "../../models/user";
import { SEARCH_PAGE } from "../pages.constants";

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

  images = [ '100-100.png', '125-100.png', '125-125.png', '125-175.png' ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public usersDataProvider: UsersDataProvider,
    public userDataProvider: UserDataProvider
  ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketPage');
  }


  openSearch() {
    this.events.publish('open:search');
  }

}
