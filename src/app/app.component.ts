import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LOGIN_PAGE } from '../pages/pages.constants';

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
    public splashScreen: SplashScreen) {
    this.initializeApp();
    this.rootPage = LOGIN_PAGE;
    this.listenToLoginEvents();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.openPage(TabsPage)
    });

    this.events.subscribe('user:logout', () => {
      this.openPage(LOGIN_PAGE)
    });
  }

  openPage(page) {
    this.nav.setRoot(page);
  }
}

