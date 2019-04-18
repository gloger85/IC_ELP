import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private buttonClicked = new BehaviorSubject<string>('');
  private idNotifier = new Subject<number>();
  private holidayNameUpdated = new BehaviorSubject<string>('');
  currentButtonState = this.buttonClicked.asObservable();
  currentIdTaken = this.idNotifier.asObservable();
  nameUpdated = this.holidayNameUpdated.asObservable();

  constructor() { }

  changeState(state: string) {
    this.buttonClicked.next(state);
  }

  notifyId(id: number) {
    this.idNotifier.next(id);
  }

  notifyHolidayName(description: string) {
    this.holidayNameUpdated.next(description);
  }
}
