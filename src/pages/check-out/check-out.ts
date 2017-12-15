import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CheckOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-out',
  templateUrl: 'check-out.html',
})
export class CheckOutPage {
  cartItems = [];
  address = '';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events) {
    this.cartItems = this.navParams.get('cartItems');
    this.address = this.navParams.get('address');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckOutPage');
  }

  totalPrice() {
    let total = 0;
    this.cartItems.forEach(e => {
      total += e.amount;
    });
    return total;
  }

  confirm() {
    this.events.publish('close:search');
  }

}
