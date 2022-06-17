import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders():Observable<any> {
    return this.http.get('localhost:8080/api/v1/orderall');//pass x-auth token as well
   }
}
