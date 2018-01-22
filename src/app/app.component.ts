import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
/* import { ListPage } from '../pages/list/list'; */
import { HaveeruPage } from '../pages/haveeru/haveeru';
import { HedhunuPage } from '../pages/hedhunu/hedhunu';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, icon : string, component: any}>;

  activepage: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen ) {
    this.initializeApp();


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'ޒިކްރު', icon : 'home', component: HomePage },
      { title: 'ހެދުނުގެ ޒިކްރު', icon : 'partly-sunny',component: HedhunuPage },
      { title: 'ހަވީރުގެ ޒިކްރު', icon : 'cloudy-night',component: HaveeruPage },
      { title: 'ސެޓިންގް', icon : 'settings', component: SettingsPage },
      { title: 'އެޕްލިކޭޝަންގެ މައުލޫމާތު', icon : 'information-circle', component: AboutPage }
    ]; 

    this.activepage=this.pages[0];
   

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activepage=page;
  }

  checkactive(page){
    return page == this.activepage;
  }
}
