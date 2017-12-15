import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { Market } from "../../models/market";

import { UsersDataProvider } from "../../providers/users-data/users-data";
import { User } from "../../models/user";

import { Observable } from 'rxjs/Observable';
import { MarketDataProvider, ItemDataProvider } from "../../providers/providers";
import { Item } from "../../models/item";
import { Storage } from '@ionic/storage';


/**
 * Generated class for the ShopDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop-detail',
  templateUrl: 'shop-detail.html',
})
export class ShopDetailPage {

  user:User;
  saveStatus : boolean = false;
  tabShopDetail: string = "sellingList";
  shopDetail:Market;
  items:Observable<Item[]>;
  buttonCheck:boolean = false;

  constructor(public navCtrl: NavController,
    private storage: Storage,
    public usersData: UsersDataProvider,
    public navParams: NavParams,
    private photoViewer: PhotoViewer,
    public itemDataProvider: ItemDataProvider,
    public marketDataProvider: MarketDataProvider){
    this.shopDetail = this.navParams.get('shopDetail');
    this.items = this.itemDataProvider.getItem();
    this.items = this.items.map(item => {
      return item.filter(data => {
        if (this.shopDetail.mid == data.mid) {
          return data;
        }
      })
    });
    if(this.shopDetail.uid = null){
      this.shopDetail.uid = [];
      this.shopDetail.follow = this.shopDetail.uid.length;
    }
    
    this.user = usersData.getUserProfile();
    console.log(this.shopDetail);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopDetailPage');
  }

  setButton(){
    if(this.shopDetail.uid.indexOf(this.user.uid) !== -1){
      this.buttonCheck = true;
    }else{
      this.buttonCheck = false;
    }
  }

  showPhotoViewer(src:string) {
  	this.photoViewer.show(src);
  }

  save() {
    if (this.saveStatus == false) {
      this.saveStatus = true;
    } else {
      this.saveStatus = false;
    }
  }

  follow(){
    this.shopDetail.follow += 1;
    if(this.shopDetail.uid === null){
      this.shopDetail.uid = [];
      
    }
    this.shopDetail.uid.push(this.user.uid);
    if(this.user.mid === null){
      this.user.mid = [];
    }
    this.user.mid.push(this.shopDetail.mid);
    
    this.buttonCheck = true;
    this.marketDataProvider.updateMarket(this.shopDetail);
   // this.usersData.updateUser(this.user);
    alert("ติดตามเรียบร้อยแล้ว");
  }
  unfollow(){
    this.shopDetail.follow -= 1;
    this.buttonCheck = false;
    const index:number = this.shopDetail.uid.indexOf(this.user.uid);
    if(index !== -1){
      this.shopDetail.uid.splice(index,1);
    }
    this.marketDataProvider.updateMarket(this.shopDetail);
    //this.usersData.updateUser(this.user);
    alert("หยุดติดตามเรียบร้อยแล้ว");
  }

  reset(){
    this.shopDetail.follow = 0;
    this.shopDetail.uid = [];
    this.marketDataProvider.updateMarket(this.shopDetail);
  }

}
