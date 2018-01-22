import { Component, ChangeDetectorRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AudioProvider } from 'ionic-audio';
import { ITrackConstraint } from 'ionic-audio';
import { IAudioTrack } from 'ionic-audio';


@IonicPage()
@Component({
  selector: 'page-haveeru',
  templateUrl: 'haveeru.html',
})
export class HaveeruPage {

  myTracks: ITrackConstraint[];
  myTracks2: IAudioTrack[];
  playlist: ITrackConstraint[] = [];
  playlist2: IAudioTrack[];

  currentIndex: number = -1;
  currentTrack: ITrackConstraint;

  constructor(private _cdRef: ChangeDetectorRef, private AudioProvider : AudioProvider) {
    // plugin won't preload data by default, unless preload property is defined within json object - defaults to 'none'
    this.myTracks  = [
    
    {
      id: 1,
      src: 'assets/sweep.mp3',
      artist: 'Stephane Wrembel',
      title: 'Stephane Wrembel Live',
      art: 'www/assets/img/Stephane.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    }];

    this.myTracks  = [
    
      {
        id: 1,
        src: './assets/sweep.mp3',
        artist: 'Stephane Wrembel',
        title: 'Stephane Wrembel Live',
        art: 'assets/img/Stephane.jpg',
        preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
      }];
 
  }

  add(track: ITrackConstraint) {
    this.playlist.push(track);
  }

  play(track: ITrackConstraint, index: number) {
    this.playlist.push(track);
      this.currentTrack = track;
      this.currentIndex = 0 ;
  }

  playaudio(){
    this.AudioProvider.play(1);
    
  }

  next() {
    // if there is a next track on the list play it
    if (this.playlist.length > 0 && this.currentIndex >= 0 && this.currentIndex < this.playlist.length - 1) {
      let i = this.currentIndex + 1;
      let track = this.playlist[i];
      this.play(track, i);
      this._cdRef.detectChanges();  // needed to ensure UI update
    } else if (this.currentIndex == -1 && this.playlist.length > 0) {
      // if no track is playing then start with the first track on the list
      this.play(this.playlist[0], 0);
    }
  }

  onTrackFinished(track: any) {
    this.next();
  }

  clear() {
    this.playlist = [];
  }
  

}
