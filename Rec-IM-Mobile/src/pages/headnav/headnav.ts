import { Component } from '@angular/core';
import { LoginPage } from './../login/login';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'head-nav',
  templateUrl: 'headnav.html'
})
export class HeadNav {

  constructor(public navCtrl: NavController) {

  }

  logout() {
    this.navCtrl.push(LoginPage);
  }

}