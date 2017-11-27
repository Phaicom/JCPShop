import { Component } from '@angular/core';

import { HOME_PAGE } from '../pages.constants';
import { BrowsetabPage } from '../browsetab/browsetab';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HOME_PAGE;
  tab2Root = BrowsetabPage;
  tab3Root = HOME_PAGE;
  tab4Root = HOME_PAGE;
  tab5Root = HOME_PAGE;

  constructor() {

  }
}

