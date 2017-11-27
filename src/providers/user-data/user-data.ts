import { Injectable } from '@angular/core';
import { Events, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Facebook } from '@ionic-native/facebook';
import { SplashScreen } from '@ionic-native/splash-screen';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from "../../models/user";

/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {
  HAS_LOGGED_IN = 'hasLoggedIn';

  constructor(
    private afAuth: AngularFireAuth,
    private fb: Facebook,
    private platform: Platform,
    public events: Events,
    public storage: Storage,
    public splashScreen: SplashScreen) {
    afAuth.authState.subscribe((user: firebase.User) => {
      console.log(user);
      if (!user) {
        this.storage.set('user', null);
        return;
      }

      let data = {
        displayName: user.displayName,
        email: user.email,
        phoneNumber: +user.phoneNumber,
        photoURL: user.photoURL,
        providerId: user.providerId,
        uid: user.uid
      }
      this.storage.set('user', data);
      this.storage.set(this.HAS_LOGGED_IN, true);
      this.setUser(data);
      this.events.publish('user:login');
      this.splashScreen.hide();
    });
  }

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

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };

  setUser(user: User): void {
    this.storage.set('user', user);
  }
}
