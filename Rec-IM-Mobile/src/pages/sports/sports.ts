import { GamesPage } from './../games/games';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'sports-home',
  templateUrl: 'sports.html'
})

export class SportsPage {

  constructor(public navCtrl: NavController) {

  }

  games() {
    this.navCtrl.push(GamesPage);
  }

}