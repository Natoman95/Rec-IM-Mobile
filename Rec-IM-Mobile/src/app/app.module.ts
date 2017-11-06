import { GameControlPage } from './../pages/gamecontrol/gamecontrol';
import { IndicentsPage } from './../pages/incidents/incidents';
import { HomePage } from '../pages/home/home';
import { GamesPage } from './../pages/games/games';
import { SportsPage } from './../pages/sports/sports';
import { LoginPage } from './../pages/login/login';
import { FootNav } from '../pages/footnav/footnav';
import { HeadNav } from '../pages/headnav/headnav';

import { GameTimerService } from './../services/GameTimerService';

import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HeadNav,
    FootNav,
    LoginPage,
    SportsPage,
    GamesPage,
    IndicentsPage,
    GameControlPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HeadNav,
    FootNav,
    LoginPage,
    SportsPage,
    GamesPage,
    IndicentsPage,
    GameControlPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GameTimerService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
