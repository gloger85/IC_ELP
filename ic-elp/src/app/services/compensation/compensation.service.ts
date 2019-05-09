import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompensationRequest } from 'src/app/domain/compensationRequest';

@Injectable({
  providedIn: 'root'
})
export class CompensationService {

  constructor(private http: HttpClient) { }

  getAllCompensations(): Observable<CompensationRequest[]> {
    return this.http.get<CompensationRequest[]>("http://localhost:8080/compensations");
  }

  addCompensation(request: CompensationRequest): Observable<CompensationRequest> {
    return this.http.post<CompensationRequest>("http://localhost:8080/compensations/add", request);
  }
}
