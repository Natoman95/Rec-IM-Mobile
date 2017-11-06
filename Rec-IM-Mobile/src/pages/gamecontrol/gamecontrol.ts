import { GameTimerService } from './../../services/GameTimerService';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'game-control-page',
  templateUrl: 'gamecontrol.html'
})

export class GameControlPage {

  constructor(public navCtrl: NavController, public timerSvc: GameTimerService) { }

  ngOnInit() {
    this.timerSvc = new GameTimerService();
  }

  startTimer() {
    this.timerSvc.startTimer();
  }

  stopTimer() {
    this.timerSvc.stopTimer();
  }

  getSeconds() {
    return this.timerSvc.getSeconds();
  }

  getMinutes() {
    return this.timerSvc.getMinutes();
  }

  getHours() {
    return this.timerSvc.getHours();
  }
}