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

  picture:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public socialSharing: SocialSharing) {
    this.picture = this.navParams.get('picture');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  cancle() {
  	this.navCtrl.pop();
  }

  shareViaFackbook() {
   if (this.picture != "") {
      this.socialSharing.shareViaFacebook('',this.picture,'').then(() => {
        // Success!
      }).catch(() => {
        // Error!
      });
   }
  }

  shareViaInstagram() {
    if (this.picture != "") {
      this.socialSharing.shareViaInstagram('',this.picture).then(() => {
        // Success!
      }).catch(() => {
        // Error!
      });
    }
  }

  shareViaEmail() {
    if (this.picture != "") {
      this.socialSharing.shareViaEmail('', '', [], [], [], this.picture).then(() => {
        // Success!
      }).catch(() => {
        // Error!
      });
   }
  }
}
