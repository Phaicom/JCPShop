import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { InboxDataProvider } from "../../providers/providers";
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Noti } from "../../models/noti";

/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {
  notis: Observable<Noti[]>;
  user: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public storage: Storage,
    private inboxData: InboxDataProvider
  ) {
    this.notis = this.inboxData.getNoti();

    this.storage.get('user').then(data => {
      this.user = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

  closeInbox() {
    this.events.publish('close:search');
  }

  removeNoti(noti: Noti) {
    this.inboxData.deleteNoti(noti);
  }

}
