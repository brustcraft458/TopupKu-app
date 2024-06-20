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

  initGameTotal() {
    return {
      status: "",
      game_id: "",
      game_name: "",
      paid_total: 0,
      user_total: 0
    }
  }

  initGameUsers() {
    return {
      transaction_id: "",
      transaction_status: "",
      product_name: "",
      game_name: "",
      lasted_price: 0,
      product_price: 0,
      paid_price: 0,
      usergame_username: "",
      usergame_globalid: ""
    }
  }

  initDetail() {
    return {
      transaction: {
        status: "",
        processed_by: "",
        created_at: "",
        updated_at: ""
      },
      game: {
        id: "",
        name: ""
      },
      user: {
        username: "",
        phone: ""
      },
      usergame: {
        globalid: "",
        server: "",
        username: ""
      },
      product: {
        name: "",
        price: 0
      },
      payment: {
        status: "",
        product_price: 0,
        seller_cost: 0,
        service_cost: 0,
        total_cost: 0,
        paid_price: 0,
        refund_cost: 0,
        debt_cost: 0
      }
    }
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

  getDetail(transactionId: string) {
    return this.http.get<any>(`${this.apiUrl}/transactions/detail/${transactionId}`).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(err: any) {
    let msg = err.error?.message || err.name
    let debug = err.error?.debug?.message || ""
    return throwError(() => ({ message: msg, debug: debug }))
  }
}
