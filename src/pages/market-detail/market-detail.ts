import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { MODAL_PAGE } from '../pages.constants';


/**
 * Generated class for the MarketDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-market-detail',
  templateUrl: 'market-detail.html',
})
export class MarketDetailPage {

    images = [ 'https://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/14351999_1199453586757308_2142988214076800661_o.jpg?oh=78f173fc0c33025d81641d4bcf479c78&oe=5AC1F219', 
             'https://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/14258109_1181056208597046_1010626863625118272_o.jpg?oh=0b08a7f8b84b48a46ce78e542d54ac0b&oe=5A9168FB', 
             'https://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/13522775_1042965985739403_3268806380087284009_o.jpg?oh=25f6db84d173c2c77136f662e825a47d&oe=5AD468F7' ];


  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketDetailPage');
  }

  presentModal() {
    let modal = this.modalCtrl.create(MODAL_PAGE);
    modal.present();
  }



}
