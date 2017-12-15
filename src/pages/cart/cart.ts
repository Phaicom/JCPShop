import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController, Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { CHECK_OUT_PAGE } from "../pages.constants";

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  cartItems: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public storage: Storage,
    public alertCtrl: AlertController
  ) {
    this.storage.get('cart').then(data => {
      this.cartItems = JSON.parse(data);
      this.cartItems.forEach(e => {
        e['qty'] = 1;
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  closeCart() {
    this.events.publish('close:search');
  }

  checkOut() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Select Address');

    alert.addInput({
      type: 'radio',
      label: '77/7 Prachauthit 55 Thungkru Bangmod BKK',
      value: '77/7 Prachauthit 55 Thungkru Bangmod BKK',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '22/2 Prachauthit 25 Thungkru Bangmod BKK',
      value: '22/2 Prachauthit 25 Thungkru Bangmod BKK'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        this.navCtrl.push(CHECK_OUT_PAGE, {
          cartItems: this.cartItems,
          address: data
        });
      }
    });
    alert.present();
  }

  removeItem(Item) {
    this.cartItems.splice(this.cartItems.indexOf(Item), 1);
    this.storage.set('cart', JSON.stringify(this.cartItems));
  }

  totalPrice() {
    let total = 0;
    this.cartItems.forEach(e => {
      total += e.amount;
    });
    return total;
  }

}
