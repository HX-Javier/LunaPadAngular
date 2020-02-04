import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { catchError, tap } from 'rxjs/operators';
import { Token } from '../models/token.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LunaService {

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  /**
   *  Get a token using a pin
   * @param pin 
   */
  public getToken(pin:string){
    return this.http.post<Token>(environment.apiUrl + '/Pad/Token', {Pin: pin} , this.httpOptions)
    .pipe(
      tap( res=> this.setSession(res.Token)), 
      catchError(this.handleError)
      );
  }

  /**
   * Store the token in local Storage
   * @param token 
   */
  private setSession(token) {
    localStorage.setItem('token', token);
}     




  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: any) {
    return (error: any): Observable<any> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return result ;
    };
  }
}
