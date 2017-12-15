import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { User } from "../../models/user";
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

/*
  Generated class for the UsersDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersDataProvider {

  user: User;
  usersListRef: AngularFirestoreCollection<User>;

  constructor(
    public fireStore: AngularFirestore,
    private storage: Storage
  ) {
    this.usersListRef = this.fireStore.collection<User>(`/usersList`);
    this.storage.get('user').then((user) => {
      this.user = user;
  });

  }

  getUser(): Observable<User[]> {
    return this.usersListRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        let data = action.payload.doc.data() as User;
        const id = action.payload.doc.id;
        data['id'] = id;
        return data;
      });
    });
  }

  addUser(user: User): void {
    this.usersListRef.add(user);
  }

  deleteUser(user: User): void {
    this.usersListRef.doc(user.id).delete();
  }

  updateUser(user: User): void {
    this.usersListRef.doc(user.id).update(user);
    this.user = user;
    this.storage.set('user',user);
  }

  getUserProfile(){
    return this.user;
  }

}
