import { GameTimerService } from './../../services/GameTimerService';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'game-control-page',
  templateUrl: 'gamecontrol.html'
})

export class GameControlPage {

  private teamOneScore: number = 0;
  private teamTwoScore: number = 0;

  private teamOneTimeouts: number = 3;
  private teamTwoTimeouts: number = 3;

  constructor(public navCtrl: NavController, public timerSvc: GameTimerService) { }

  ngOnInit() {
    this.timerSvc = new GameTimerService();
  }

  // Timer methods

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

  // Score methods

  getTeamOneScore() {
    return this.teamOneScore;
  }

  getTeamTwoScore() {
    return this.teamTwoScore;
  }

  addTeamOneScore() {
    this.teamOneScore = ++this.teamOneScore;
  }

  subTeamOneScore() {
    if (this.teamOneScore > 0) {
      this.teamOneScore = --this.teamOneScore;
    }
  }

  addTeamTwoScore() {
    this.teamTwoScore = ++this.teamTwoScore;
  }

  subTeamTwoScore() {
    if (this.teamTwoScore > 0) {
      this.teamTwoScore = --this.teamTwoScore;
    }
  }

  // Timeout methods

  getTeamOneTimeouts() {
    return this.teamOneTimeouts;
  }

  getTeamTwoTimeouts() {
    return this.teamTwoTimeouts;
  }

  addTeamOneTimeouts() {
    this.teamOneTimeouts = ++this.teamOneTimeouts;
  }

  subTeamOneTimeouts() {
    if (this.teamOneTimeouts > 0) {
      this.teamOneTimeouts = --this.teamOneTimeouts;
    }
  }

  addTeamTwoTimeouts() {
    this.teamTwoTimeouts = ++this.teamTwoTimeouts;
  }

  subTeamTwoTimeouts() {
    if (this.teamTwoTimeouts > 0) {
      this.teamTwoTimeouts = --this.teamTwoTimeouts;
    }
  }
}