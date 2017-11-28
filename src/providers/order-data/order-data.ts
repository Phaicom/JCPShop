import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Order } from "../../models/order";
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the OrderDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderDataProvider {
  ordersListRef: AngularFirestoreCollection<Order>;
  ordersList: Observable<Order[]>;

  constructor(public fireStore: AngularFirestore) {
    this.ordersListRef = this.fireStore.collection<Order>(`/marketsList`);
    this.ordersList = this.ordersListRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        let data = action.payload.doc.data() as Order;
        const id = action.payload.doc.id;
        data['id'] = id;
        return data;
      });
    });
  }

  addOrder(order: Order): void {
    this.ordersListRef.add(order);
  }

  deleteOrder(order: Order): void {
    this.ordersListRef.doc(order.id).delete();
  }

  updateOrder(order: Order): void {
    this.ordersListRef.doc(order.id).update(order);
  }

}
