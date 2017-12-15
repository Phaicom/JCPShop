import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { UsersDataProvider } from "../../providers/users-data/users-data";

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public userData: UsersDataProvider) {
  	this.user = this.navParams.get("user");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserPage');
  }

  updateData(){
    
  	this.userData.updateUser(this.user);
  	this.navCtrl.pop();
  }

}
