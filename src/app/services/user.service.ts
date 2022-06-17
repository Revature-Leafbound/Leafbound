import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post('localhost:8080/api/v1/users/register', user);
  }
}
