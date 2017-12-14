import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';
import { InboxDataProvider } from "../providers/providers";

import { LOGIN_PAGE, TABS_PAGE, SEARCH_PAGE, INBOX_PAGE } from '../pages/pages.constants';
import { Noti } from '../models/noti';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  constructor(
    public events: Events,
    public storage: Storage,
    public platform: Platform,
    public statusBar: StatusBar,
    public toastCtrl: ToastController,
    public splashScreen: SplashScreen,
    private oneSignal: OneSignal,
    private inboxData: InboxDataProvider
  ) {
    this.initializeApp();
    this.rootPage = LOGIN_PAGE;
    this.listenToLoginEvents();
    this.listenToSearchEvents();
    this.listenToInboxEvents();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.oneSignal.startInit('711e8ae4-418c-4170-8bde-486237c2e305', '517560019757');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe((res) => {
        // do something when notification is received
        console.log(res);
      });

      this.oneSignal.handleNotificationOpened().subscribe((res) => {
        // do something when a notification is opened
        console.log(res);
        this.presentToast(res.notification.payload.title, res.notification.payload.body);
      });

      this.oneSignal.endInit();
    });
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.openPage(TABS_PAGE);
    });

    this.events.subscribe('user:logout', () => {
      this.openPage(LOGIN_PAGE);
    });
  }

  listenToSearchEvents() {
    this.events.subscribe('open:search', () => {
      this.openPage(SEARCH_PAGE);
    });

    this.events.subscribe('close:search', () => {
      this.openPage(TABS_PAGE);
    });
  }

  listenToInboxEvents() {
    this.events.subscribe('open:inbox', () => {
      this.openPage(INBOX_PAGE);
    });
  }

  openPage(page) {
    this.nav.setRoot(page);
  }

  presentToast(title: string, body: string) {
    this.storage.get('user').then(data => {

      let noti: Noti = {
        id: '',
        title: title,
        body: body,
        date: new Date().toUTCString(),
        uid: data.uid
      }
      this.inboxData.addNoti(noti);

      let msg = `User was read ${title} successfully`;

      const toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'top'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    });

  }
}

