import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Market } from "../../models/market";
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MarketDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MarketDataProvider {
  marketsListRef: AngularFirestoreCollection<Market>;
  marketsList: Observable<Market[]>;

  constructor(public fireStore: AngularFirestore) {
    this.marketsListRef = this.fireStore.collection<Market>(`/marketsList`);
    this.marketsList = this.marketsListRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        let data = action.payload.doc.data() as Market;
        const id = action.payload.doc.id;
        data['id'] = id;
        return data;
      });
    });
  }

  addMarket(market: Market): void {
    this.marketsListRef.add(market);
  }

  deleteMarket(market: Market): void {
    this.marketsListRef.doc(market.id).delete();
  }

  updateMarket(market: Market): void {
    this.marketsListRef.doc(market.id).update(market);
  }
}
