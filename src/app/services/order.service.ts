import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { Observable } from 'rxjs';
import { getInstructionStatements } from '@angular/compiler/src/render3/view/util';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  //get an obervable of all orders 
  getOrderHistory(): Observable<Order[]> {
    //add token to header
    const headers = {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
    //get the customer's id number from local storage
    const customerId = localStorage.getItem('customerId');

    return this.http.get<Order[]>(`http://localhost:8080/api/order/customer/{customerId}`, { headers });
   // return this.http.get<Order[]>('/api/order/all');
   
   }
}
