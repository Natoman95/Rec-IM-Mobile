import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'foot-nav',
  templateUrl: 'footnav.html'
})
export class FootNav {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  back() {
    this.navCtrl.pop();
  }

  home() {
    this.navCtrl.push(HomePage);
  }

  callGoPoAlert() {
    let alert = this.alertCtrl.create({
      title: 'Emergency Call',
      message: 'Call Gordon Police's emergency number?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Call',
          handler: () => {
          }
        }
      ]
    });
    alert.present();
  }
}