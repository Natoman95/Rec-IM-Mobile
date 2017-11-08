import { HomeComponent } from './../home/home.component';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'foot-nav',
  templateUrl: 'foot-nav.component.html'
})
export class FootNavComponent {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  back() {
    this.navCtrl.pop();
  }

  home() {
    this.navCtrl.push(HomeComponent);
  }

  callGoPoAlert() {
    let alert = this.alertCtrl.create({
      title: 'Emergency Call',
      message: "Call Gordon Police's emergency number?",
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