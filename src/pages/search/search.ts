import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchType: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events, ) {
    this.searchType = "item";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  closeSearch() {
    this.events.publish('close:search');
  }

}
