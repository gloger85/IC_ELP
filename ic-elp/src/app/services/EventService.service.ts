import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Event } from '../domain/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

    constructor(private http: HttpClient) {}

    getEvent() {
        return this.http.get<Event[]>('http://localhost:8080/logs/all');
    }
  }
