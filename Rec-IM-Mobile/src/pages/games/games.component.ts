import { GameControlComponent } from './../game-control/game-control.component';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'games',
  templateUrl: 'games.component.html'
})

export class GamesComponent {

  constructor(public navCtrl: NavController) {

  }

  gameControl() {
    this.navCtrl.push(GameControlComponent);
  }

}