import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Event } from '../domain/event';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  webApiUrl = environment.webApiUrl;

  constructor(private http: HttpClient) {}

  getEvent() {
    return this.http.get<Event[]>(this.webApiUrl + 'logs/all');
  }
}
