import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Holiday } from 'src/app/domain/holiday/holiday';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  webApiUrl = environment.webApiUrl;
  date: Date;

  private getHolidaysURL: string = this.webApiUrl + '/holidays';
  private addHolidaysURL: string = this.webApiUrl + '/holidays/add';
  private updateHolidaysURL: string = this.webApiUrl + `/holidays/update/${this.date}`;
  private removeHolidaysURL: string = this.webApiUrl + `/holidays/remove/${this.date}`;

  constructor(private http: HttpClient) { }

  getAllHolidays(): Observable<any> {
    return this.http.get(this.getHolidaysURL);
  }

  addHolidays(holiday: Holiday) {
    return this.http.post(this.addHolidaysURL, holiday);
  }

  updateHoliday(date: Date, holiday: Holiday): Observable<any> {
    return this.http.put(this.webApiUrl + `/holidays/update/${date}`, holiday);
  }

  removeHoliday(date: Date) {
    return this.http.delete(this.webApiUrl + `/holidays/remove/${this.date}`);
  }
}
