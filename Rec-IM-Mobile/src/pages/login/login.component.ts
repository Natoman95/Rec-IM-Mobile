import { HomeComponent } from './../home/home.component';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(public navCtrl: NavController) {

  }

  login() {
    this.navCtrl.push(HomeComponent);
  }

}