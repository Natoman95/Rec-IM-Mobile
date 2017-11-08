import { GamesComponent } from './../games/games.component';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'sports',
  templateUrl: 'sports.component.html'
})

export class SportsComponent {

  constructor(public navCtrl: NavController) {

  }

  games() {
    this.navCtrl.push(GamesComponent);
  }

}