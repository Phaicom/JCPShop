import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Item } from "../../models/item";
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ItemDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemDataProvider {
  itemsListRef: AngularFirestoreCollection<Item>;
  itemsList: Observable<Item[]>;

  constructor(public fireStore: AngularFirestore) {
    this.itemsListRef = this.fireStore.collection<Item>(`/itemsList`);
    this.itemsList = this.itemsListRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        let data = action.payload.doc.data() as Item;
        const id = action.payload.doc.id;
        data['id'] = id;
        return data;
      });
    });
  }

  addItem(item: Item): void {
    this.itemsListRef.add(item);
  }

  deleteItem(item: Item): void {
    this.itemsListRef.doc(item.id).delete();
  }

  updateItem(item: Item): void {
    this.itemsListRef.doc(item.id).update(item);
  }

}
