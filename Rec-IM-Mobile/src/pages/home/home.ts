import { SportsPage } from './../sports/sports';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  sports() {
    this.navCtrl.push(SportsPage);
  }

}
