import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';
import { IonicStorageModule } from "@ionic/storage";

import { MyApp } from './app.component';
import { MarketDataProvider, UserDataProvider } from "../providers/providers";
import { UsersDataProvider } from '../providers/users-data/users-data';
import { ItemDataProvider } from '../providers/item-data/item-data';
import { OrderDataProvider } from '../providers/order-data/order-data';
import { ParallaxHeaderDirective } from '../directives/parallax-header/parallax-header';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { SocialSharing } from '@ionic-native/social-sharing';
import { OneSignal } from '@ionic-native/onesignal';
import { InboxDataProvider } from '../providers/inbox-data/inbox-data';

export const firebaseConfig = {
  apiKey: "AIzaSyBp4-vtfgPJebNGPlJ-mXtKFLPAuJ3Nx4Q",
  authDomain: "jcpshop-a68aa.firebaseapp.com",
  databaseURL: "https://jcpshop-a68aa.firebaseio.com",
  projectId: "jcpshop-a68aa",
  storageBucket: "jcpshop-a68aa.appspot.com",
  messagingSenderId: "517560019757"
};

@NgModule({
  declarations: [
    MyApp,
    ParallaxHeaderDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MarketDataProvider,
    UserDataProvider,
    Facebook,
    UsersDataProvider,
    ItemDataProvider,
    OrderDataProvider,
    OneSignal,
    PhotoViewer,
    SocialSharing,
    InboxDataProvider
  ]
})
export class AppModule { }
