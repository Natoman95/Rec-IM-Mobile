import { GamesPage } from './../games/games';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  games() {
    this.navCtrl.push(GamesPage);
  }

}
