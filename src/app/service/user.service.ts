import { LoginCredentials } from './../models/login-credentials';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessagesService, private http: HttpClient) { }

  attemptLogin(credentials: LoginCredentials): Observable<any> {
    const url = 'http://localhost:8080/api/v1/user/login';
    return this.http.post<any>(url, credentials, { responseType: 'text' as 'json', observe: 'response' }).pipe(
      tap(response => this.log(response.body)),
      catchError(this.handleError<any>('attemptLogin'))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    //send error messages to the log() which in turn record that error in our messageService
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}