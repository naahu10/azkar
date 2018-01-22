import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HaveeruPage } from '../pages/haveeru/haveeru';
import { Haveeru1Page } from '../pages/haveeru1/haveeru1';
import { Haveeru2Page } from '../pages/haveeru2/haveeru2';
import { Haveeru3Page } from '../pages/haveeru3/haveeru3';
import { HedhunuPage } from '../pages/hedhunu/hedhunu';
import { Hedhunu1Page } from '../pages/hedhunu1/hedhunu1';
import { Hedhunu2Page } from '../pages/hedhunu2/hedhunu2';
import { Hedhunu3Page } from '../pages/hedhunu3/hedhunu3';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
import { NativeAudio } from '@ionic-native/native-audio';
import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HaveeruPage,
    Haveeru1Page,
    Haveeru2Page,
    Haveeru3Page,
    HedhunuPage,
    Hedhunu1Page,
    Hedhunu2Page,
    Hedhunu3Page,
    AboutPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicAudioModule.forRoot(defaultAudioProviderFactory)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HaveeruPage,
    Haveeru1Page,
    Haveeru2Page,
    Haveeru3Page,
    HedhunuPage,
    Hedhunu1Page,
    Hedhunu2Page,
    Hedhunu3Page,
    AboutPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    SmartAudioProvider,
    Vibration,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
