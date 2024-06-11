import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.serverUrl}/api`
  }

  register(json: any): Observable<any> {
    console.log("url", this.apiUrl)
    console.log("sending", json)
    return this.http.post<any>(`${this.apiUrl}/register`, json)
  }

  login(json: any) {
    console.log("login", json)
    return this.http.post<any>(`${this.apiUrl}/login`, json)
  }
}
