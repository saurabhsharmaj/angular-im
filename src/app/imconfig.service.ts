import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IMConfigService {
  private baseUrl = 'http://localhost:4000/common/basic';
  constructor(private http: HttpClient) { }

  getIMConfig(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
