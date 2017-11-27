import { Component } from '@angular/core';

import { BROWSE_PAGE, MARKET_PAGE, FOLLOWING_PAGE, MY_PROFILE_PAGE } from '../pages.constants';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FOLLOWING_PAGE;
  tab2Root = MARKET_PAGE;
  tab3Root = BROWSE_PAGE;
  tab4Root = MY_PROFILE_PAGE;

  constructor() {

  }
}

