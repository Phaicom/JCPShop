import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { SEARCH_PAGE } from "../pages.constants";
import { Edit_UserPage } from "../pages.constants";
import { UsersDataProvider } from "../../providers/users-data/users-data";
import { User } from "../../models/user";
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {

  user : User;
  userList: Observable<User[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    private storage: Storage,
    public usersData: UsersDataProvider
  ) {
    this.userList = usersData.getUser();
    this.user = usersData.getUserProfile();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
  }


 

  openSearch() {
    this.storage.set('before:search', 3);
    this.events.publish('open:search');
  }

  editProfile(user:User){
  	this.navCtrl.push(Edit_UserPage, {user});
    
  }

}
