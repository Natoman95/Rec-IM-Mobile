import { AppComponent } from './app.component';
import { GameControlComponent } from './../pages/game-control/game-control.component';
import { IncidentsComponent } from './../pages/incidents/incidents.component';
import { HomeComponent } from '../pages/home/home.component';
import { GamesComponent } from './../pages/games/games.component';
import { SportsComponent } from './../pages/sports/sports.component';
import { LoginComponent } from './../pages/login/login.component';
import { FootNavComponent } from '../pages/foot-nav/foot-nav.component';
import { HeadNavComponent } from '../pages/head-nav/head-nav.component';

import { GameTimerService } from './../services/game-timer.service';

import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadNavComponent,
    FootNavComponent,
    LoginComponent,
    SportsComponent,
    GamesComponent,
    IncidentsComponent,
    GameControlComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    HomeComponent,
    HeadNavComponent,
    FootNavComponent,
    LoginComponent,
    SportsComponent,
    GamesComponent,
    IncidentsComponent,
    GameControlComponent,
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
