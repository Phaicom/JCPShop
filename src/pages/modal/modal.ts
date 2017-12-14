import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  cancle() {
  	this.navCtrl.pop();
  }

  shareViaFackbook() {
    this.socialSharing.shareViaFacebook('','https://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/14351999_1199453586757308_2142988214076800661_o.jpg?oh=78f173fc0c33025d81641d4bcf479c78&oe=5AC1F219','').then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }
}
