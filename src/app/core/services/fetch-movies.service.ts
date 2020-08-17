import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Movies } from '../../shared/models/movies'

@Injectable({
  providedIn: 'root'
})
export class FetchMoviesService {
  private apiKey: string = '879b3e71';

  constructor(private http: HttpClient) { }

  handleError(err: HttpErrorResponse) {
    return throwError(err.error.message || "Server Error")
  }

  getRecommendedRecipes(searchValue): Observable<Movies> {
    const apiUrl: string = `http://www.omdbapi.com/?s=${searchValue}&apikey=${this.apiKey}`;
    return this.http.get<Movies>(apiUrl).pipe(catchError(this.handleError))
  }
}
