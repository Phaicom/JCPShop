import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersDataProvider, UserDataProvider } from "../../providers/providers";
import { User } from "../../models/user";

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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usersDataProvider: UsersDataProvider,
    public userDataProvider: UserDataProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketPage');
  }

  logout() {
    this.userDataProvider.logout();
  }

}
