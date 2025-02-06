import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChucknorrisApiService {

  private apiUrl="https://api.chucknorris.io/";

  constructor(private http: HttpClient) { }

  public getCategories(){
    return this.http.get(`${this.apiUrl}jokes/categories`);
  }

  public getRandomJoke(){
    return this.http.get(`${this.apiUrl}jokes/random`);
  }
}
