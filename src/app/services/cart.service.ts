import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart.model';
import { environment } from 'src/environments/environment';

const baseUrl = environment.apiUrl + '/OrderDetails';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Cart[]> {
    return this.http.get<Cart[]>(baseUrl);
  }
  get(id: any): Observable<Cart> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
