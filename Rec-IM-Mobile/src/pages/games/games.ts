import { GameControlPage } from './../gamecontrol/gamecontrol';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'games-page',
  templateUrl: 'games.html'
})

export class GamesPage {

  constructor(public navCtrl: NavController) {

  }

  gameControl() {
    this.navCtrl.push(GameControlPage);
  }

}