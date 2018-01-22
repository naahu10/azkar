import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';
import { NativeAudio } from '@ionic-native/native-audio';
import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public SmartAudioProvider: SmartAudioProvider, private nativeAudio : NativeAudio, public plt: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');

  }
  nativeaudio() {
    this.plt.ready().then(()=>{
    this.nativeAudio.preloadComplex('test', 'assets/sweep.mp3',1,1,0).then(() => console.log('Request successful'),
    error => console.log('Error requesting location permissions', error));
    this.nativeAudio.play('test', () => console.log('test is done playing'));

    });

  }
  loadplayTab() {

    this.SmartAudioProvider.preload('test','assets/sweep.mp3');
    this.SmartAudioProvider.play('test'); 
  }
playTab() {

  this.SmartAudioProvider.play('test');
}

}
