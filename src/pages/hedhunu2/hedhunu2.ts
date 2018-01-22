import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Hedhunu3Page } from '../hedhunu3/hedhunu3';


@IonicPage()
@Component({
  selector: 'page-hedhunu2',
  templateUrl: 'hedhunu2.html',
})
export class Hedhunu2Page {

  public tapCounter: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hedhunu2Page');
  }
  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.push(Hedhunu3Page);
    }
    
  }
  counterIncrease() {
    this.tapCounter++;
  }
  counterDecrease() {
    if (this.tapCounter > 0) {
      this.tapCounter--;
    } else {
      this.tapCounter = 0;
    }
  }
  reset() {
    this.tapCounter = 0;
  }


}
