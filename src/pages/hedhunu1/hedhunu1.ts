import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Hedhunu2Page } from '../hedhunu2/hedhunu2';



@IonicPage()
@Component({
  selector: 'page-hedhunu1',
  templateUrl: 'hedhunu1.html',
})
export class Hedhunu1Page {

  public tapCounter: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hedhunu1Page');
  }

  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.push(Hedhunu2Page);
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
