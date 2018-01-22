import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the Hedhunu3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hedhunu3',
  templateUrl: 'hedhunu3.html',
})
export class Hedhunu3Page {

  public tapCounter: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hedhunu3Page');
  }
  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.push(HomePage);
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
