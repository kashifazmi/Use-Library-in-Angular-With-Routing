import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, tap } from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularTutorialService {

  constructor(private httpClient: HttpClient) { }


  getAngTutorialDetails():Observable<any[]> {
    console.log("inside services");
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/todos/1') 
    .pipe(
      tap(_ => this.log('get Angular Tutorial Details ')),
      catchError(this.handleError<any[]>('getAngTutorialDetails', []))
    );;
  }

  postAngTutorialDetails(postData: any) {
    return this.httpClient.post('url', postData, httpOptions).pipe(
      catchError(this.handleError<any[]>('addSkiUser', []))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

 /** Log a HeroService message with the MessageService */
 private log(message: string) {
   // error message will be ready here.
   // We need to reuse this message in services
  // this.messageService.add(`HeroService: ${message}`);
}
}

export const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
    'authorizartion': 'my-auth-token'
  })
}