import { Component } from '@angular/core';
import { LoginComponent } from './../login/login.component';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'head-nav',
  templateUrl: 'headnav.component.html'
})
export class HeadNavComponent {

  constructor(public navCtrl: NavController) {

  }

  logout() {
    this.navCtrl.push(LoginComponent);
  }

}