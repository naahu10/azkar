import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HaveeruPage } from '../haveeru/haveeru';
import { HedhunuPage } from '../hedhunu/hedhunu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  haveeruPage(){

    this.navCtrl.push(HaveeruPage, {

    });

  }
  hedhunuPage(){

    this.navCtrl.push(HedhunuPage, {
    });

  }

}
