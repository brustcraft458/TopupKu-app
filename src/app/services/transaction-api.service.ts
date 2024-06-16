import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionApiService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.serverUrl}/api`
  }

  getGameTotal(status: string) {
    return this.http.get<any>(`${this.apiUrl}/transactions/game/${status}`).pipe(
      catchError(this.handleError)
    )
  }

  getGameUsers(status: string, gameId: string) {
    return this.http.get<any>(`${this.apiUrl}/transactions/game/${status}/${gameId}`).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(err: any) {
    let msg = err.error?.message || err.name
    let debug = err.error?.debug?.message || ""
    return throwError(() => ({ message: msg, debug: debug }))
  }
}
