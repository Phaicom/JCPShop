import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Item } from "../../models/item";
import { Observable } from 'rxjs/Observable';
import { Noti } from '../../models/noti';

/*
  Generated class for the InboxDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InboxDataProvider {

  inboxListRef: AngularFirestoreCollection<Noti>;

  constructor(public fireStore: AngularFirestore) {
    this.inboxListRef = this.fireStore.collection<Noti>(`/NotisList`);
  }

  getNoti(): Observable<Noti[]> {
    return this.inboxListRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        let data = action.payload.doc.data() as Noti;
        const id = action.payload.doc.id;
        data['id'] = id;
        return data;
      });
    });
  }

  addNoti(noti: Noti): void {
    this.inboxListRef.add(noti);
  }

  deleteNoti(noti: Noti): void {
    this.inboxListRef.doc(noti.id).delete();
  }

  updateNoti(noti: Noti): void {
    this.inboxListRef.doc(noti.id).update(noti);
  }

}
