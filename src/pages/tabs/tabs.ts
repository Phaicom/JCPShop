import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';

import { BROWSE_PAGE, MARKET_PAGE, FOLLOWING_PAGE, MY_PROFILE_PAGE } from '../pages.constants';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild("tabParent") tabParent: Tabs;
  activeTab: number = 0;

  tab1Root = FOLLOWING_PAGE;
  tab2Root = MARKET_PAGE;
  tab3Root = BROWSE_PAGE;
  tab4Root = MY_PROFILE_PAGE;

  constructor(
    public storage: Storage
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
    this.storage.get('before:search').then((page) => {
      this.tabParent.select(+page);
    });
  }
}

