import { Injectable } from '@angular/core';
import { Events, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Facebook } from '@ionic-native/facebook';
import { SplashScreen } from '@ionic-native/splash-screen';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from "../../models/user";
import { UsersDataProvider } from "../users-data/users-data";
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {

  HAS_LOGGED_IN = 'hasLoggedIn';
  userListRef: AngularFirestoreCollection<User>;
  user: User;

  constructor(
    private afAuth: AngularFireAuth,
    private fb: Facebook,
    private platform: Platform,
    public events: Events,
    public storage: Storage,
    public splashScreen: SplashScreen,
    public usersDataProvider: UsersDataProvider,
    public fireStore: AngularFirestore
  ) {
    afAuth.authState.subscribe((user: firebase.User) => {
      console.log(user);
      if (!user) {
        this.storage.set('user', null);
        return;
      }

      let data = {
        id: '',
        displayName: user.displayName,
        email: user.email,
        phoneNumber: +user.phoneNumber,
        photoURL: user.photoURL,
        providerId: user.providerId,
        uid: user.uid
      }

      // add user to db if user not exist in db
      let usersList = this.usersDataProvider.getUser();
      usersList.subscribe(users => {
        let filterList = users.filter(user => {
          if (user.uid === data.uid) {
            return user;
          }
        });

        if (filterList.length <= 0) {
          this.usersDataProvider.addUser(data);
        }
      });

      // set user to device storage for internal fetching
      this.storage.set('user', data);
      this.storage.set(this.HAS_LOGGED_IN, true);
      this.setUser(data);
      this.events.publish('user:login');
      this.splashScreen.hide();
    });

    this.userListRef = this.fireStore.collection<User>(`/usersList`);
    this.storage.get('user').then((user) => {
      this.user = user;
  });
  }

  // login method
  login() {
    this.splashScreen.show();
    if (this.platform.is('cordova')) {
      return this.fb.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      }).then(res => {
        console.log('mobile', res);

      });
    }
    else {
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => {
          console.log('web', res);
        });
    }
  }


  // logout method
  logout(): void {
    this.splashScreen.show();
    this.afAuth.auth
      .signOut()
      .then(res => {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
        this.splashScreen.hide();
      })
  };


  // check for user login
  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };


  // set user to device storage
  setUser(user: User): void {
    this.storage.set('user', user);
  }

  getUserData(): Observable<User[]> {
    return this.userListRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        let data = action.payload.doc.data() as User;
        const id = action.payload.doc.id;
        data['id'] = id;
        return data;
      });
    });
  }
  getUser(){
    return this.user;
  }
  updateData(user:User){
    this.user = user;
    this.storage.set('user',user);
  }
}
