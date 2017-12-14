import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReviewDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review-detail',
  templateUrl: 'review-detail.html',
})
export class ReviewDetailPage {
  detail:string = '<p>เขาช้างเผือก ตั้งอยู่ในอุทยานแห่งชาติทองผาภูมิ อ.ทองผาภูมิ จ.กาญจนบุรี เขาช้างเผือกเป็นอีกหนึ่งเขาในประเทศไทยที่วัดใจใครหลายๆ คน</p> \
    <br> \
    <img src="https\://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/15844564_10211355389658669_1564886958092512457_o.jpg?oh=dec8ee778a17bb1b65344a4c7097203b&oe=5ABA80FE"> \
    <img src="https\://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/15844683_10211355388898650_4825421167843296667_o.jpg?oh=ec19a1040d0d03f11213be50d67296e8&oe=5ACC6558"> \
    <br> \
    <p>ระยะทางเดินทางประมาณ 8 กิโลเมตร ทางสบายๆ ง่ายๆ เดินชิลๆ ก็ถึงแคมป์พักแรม แต่ไฮไลท์อยู่ที่สันคมมีดวัดใจที่ใครๆ ก็รู้จัก</p> \
    <br> \
    <img src="https\://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/15844439_10211355390098680_8900566751770514630_o.jpg?oh=e29099f4f73dd563dad9cc311605512a&oe=5ACB6EC7"> \
    <img src="https\://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/15844774_10211355386578592_217547717920245768_o.jpg?oh=a7aabf2621cff221e8d791d3a41a665a&oe=5AD0828F"> \
    <br> \
    <p>ภาพที่เห็นตรงหน้าคือ ทางเดินแคบๆ ที่คนนั่งลงไปก็เต็มทางเดินแล้ว มองลงไป 2 ข้างทางก็เป็นทางลาด หุบเหว แต่ไม่ว่ายังไงก็ต้องผ่านไปถึงจุดสุดยอดให้ได้</p> \
    <br> \
    <img src="https\://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/15896173_10211355381698470_5139730546103288499_o.jpg?oh=db5a19f4117c20eb125134607d799105&oe=5ACCA817"> \
    <img src="https\://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/15896204_10211355385298560_8263769327601698445_o.jpg?oh=7276c7c4509d9d553250a302da7c4e5e&oe=5AD14381"> \
    <br> \
    <p>และทุกอย่างก็หายเป็นปลิดทิ้งเมื่อถึงจุดหมายปลายทางของเรา</p> \
    <br> \
    <img src="https\://scontent.fbkk12-2.fna.fbcdn.net/v/t31.0-8/15799858_10211355388018628_6129378754408540873_o.jpg?oh=cae774347f481c387ab3820d916aade1&oe=5AC2D0AB">';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewDetailPage');
  }

}
