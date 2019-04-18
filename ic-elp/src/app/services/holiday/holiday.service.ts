import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Holiday } from 'src/app/domain/holiday/holiday';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  webApiUrl = environment.webApiUrl;
  date: Date;
  private refreshNeeded = new Subject<void>();

  private getHolidaysURL: string = this.webApiUrl + 'holidays';
  private getHolidayByIdURL: string = this.webApiUrl + 'holidays/';
  private addHolidaysURL: string = this.webApiUrl + 'holidays/add';
  // private updateHolidaysURL: string = this.webApiUrl + `holidays/update/${this.date}`;
  // private removeHolidaysURL: string = this.webApiUrl + `holidays/remove/${this.date}`;

  constructor(private http: HttpClient) { }

  get getRefreshNeeded() {
    return this.refreshNeeded;
  }

  getAllHolidays(): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(this.getHolidaysURL);
  }

  getHolidayById(id: number): Observable<Holiday> {
    return this.http.get<Holiday>(this.getHolidayByIdURL +`${id}`);
  } 

  addHolidays(holiday: Holiday): Observable<Holiday> {
    return this.http.post<Holiday>(this.addHolidaysURL, holiday)
    .pipe(
      tap(() => {
          this.getRefreshNeeded.next();
      })
    )
  }

  updateHoliday(id: number, holiday: Holiday): Observable<Holiday> {
    return this.http.put<Holiday>(this.webApiUrl + `holidays/update/${id}`, holiday)
    .pipe(
      tap(() => {
          this.getRefreshNeeded.next();
      })
    );
  }

  removeHoliday(id: number) {
    return this.http.delete(this.webApiUrl + `holidays/remove/${id}`)
    .pipe(
      tap(() => {
          this.getRefreshNeeded.next();
      })
    );;
  }

}
