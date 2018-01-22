import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Hedhunu1Page } from '../hedhunu1/hedhunu1';
import { Vibration } from '@ionic-native/vibration';


@IonicPage()
@Component({
  selector: 'page-hedhunu',
  templateUrl: 'hedhunu.html',
})
export class HedhunuPage {

  public tapCounter: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private Vibration : Vibration) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HedhunuPage');
  }

  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.push(Hedhunu1Page);
    }
    
  }
  counterIncrease() {
    if(this.tapCounter<3){
      this.tapCounter++;
    }
    else{
      this.Vibration.vibrate(1000);
      console.log("vibration completed")
    }
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
