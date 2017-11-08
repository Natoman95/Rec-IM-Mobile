import { IncidentsComponent } from './../incidents/incidents.component';
import { SportsComponent } from './../sports/sports.component';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html'
})

export class HomeComponent {

  constructor(public navCtrl: NavController) {

  }

  sports() {
    this.navCtrl.push(SportsComponent);
  }

  incidents() {
    this.navCtrl.push(IncidentsComponent);
  }

}
