import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { UserDataProvider } from "../../providers/user-data/user-data";

/**
 * Generated class for the EditUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUserPage {

	user:User;

  constructor(public navCtrl: NavController, public navParams: NavParams,public userData: UserDataProvider) {
  	this.user = userData.getUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserPage');
  }

  updateData(){
  	this.userData.updateData(this.user);
  	this.navCtrl.pop();
  }

}
