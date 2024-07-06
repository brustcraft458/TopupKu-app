import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionApiService {
  private apiUrl: string;
  private token: string;

  constructor(private http: HttpClient, private storage: LocalStorageService) {
    this.apiUrl = `${environment.serverUrl}/api`
    this.token = ''

    this.initCacheInput()
  }

  async initCacheInput() {
    this.token = await this.storage.getItem('user_token')
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

  private getHeaders() {
    return new HttpHeaders({
      'Authorization': this.token
    });
  }

  getGameTotal(status: string) {
    return this.http.get<any>(`${this.apiUrl}/transactions/game/${status}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  getGameUsers(status: string, gameId: string) {
    return this.http.get<any>(`${this.apiUrl}/transactions/game/${status}/${gameId}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  getDetail(transactionId: string) {
    return this.http.get<any>(`${this.apiUrl}/transactions/detail/${transactionId}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.apiUrl}/file/image`, formData, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  updateTransaction(transactionId: string, imageUrl: string) {
    const updateData = {
      "status" : "success",
      "processed_proof": imageUrl
    }
    console.log(transactionId)
    return this.http.patch<any>(`${this.apiUrl}/transactions/detail/${transactionId}`, updateData, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err: any) {
    let header = err.error?.message || err.name
    let message = err.error?.debug?.message || err.message || ""
    return throwError(() => ({ header, message }))
  }
}
