import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'foot-nav',
  templateUrl: 'footnav.html'
})
export class FootNav {

  constructor(public navCtrl: NavController) {

  }

  back() {
    this.navCtrl.pop();
  }

  home() {
    this.navCtrl.push(HomePage);
  }
}