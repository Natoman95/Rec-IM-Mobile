import { Observable, Subscription } from 'rxjs/Rx';

export class GameTimerService {

  private ticks = 0;
  private start = 0;
  private minutes: number;
  private hours: number;
  private seconds: number;
  private sub: Subscription;
  private isRunning: boolean = false;

  constructor() {
    this.seconds = this.pad(0);
    this.minutes = this.pad(0);
    this.hours = this.pad(0);
  }

  // Create an observable and map its timer to seconds, minutes, and hours
  startTimer() {
    // We only want to create the observable if we've paused or haven't created one yet
    // Clicking the start button shouldn't create a new observable while it's actively counting
    if (!this.isRunning) {
      this.isRunning = true;
      let timer = Observable.timer(1, 1000);
      this.sub = timer.subscribe(
        t => {
          // Add timer to previous stopping point to resume
          this.ticks = this.start + t;

          this.seconds = this.calcSeconds(this.ticks);
          this.minutes = this.calcMinutes(this.ticks);
          this.hours = this.calcHours(this.ticks);
        }
      );
    }
  }

  // Unsubscribe from the observable and save ticker
  stopTimer() {
    this.isRunning = false;
    this.start = ++this.ticks;
    this.sub.unsubscribe();
  }

  // Takes the observable timer and calculates seconds
  private calcSeconds(ticks: number) {
    return this.pad(ticks % 60);
  }

  // Tekes the observable timer and calculates minutes
  private calcMinutes(ticks: number) {
    return this.pad((Math.floor(ticks / 60)) % 60);
  }

  // Tekes the observable timer and calculates hours
  private calcHours(ticks: number) {
    return this.pad(Math.floor((ticks / 60) / 60));
  }

  private pad(digit: any) {
    return digit <= 9 ? '0' + digit : digit;
  }

  public getSeconds() {
    return this.seconds;
  }

  public getMinutes() {
    return this.minutes;
  }

  public getHours() {
    return this.hours;
  }
}