import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  //get an obervable of all orders 
  getOrderHistory(): Observable<Order[]> {
    return this.http.get<Order[]>('/api/order/all');
   
   }
}
