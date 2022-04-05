import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  constructor(private http: HttpClient) {}
  url = 'https://pokeapi.co/api/v2/pokemon';

  getData(limit: number, offset: number): Observable<any> {
    console.log(this.url + '?limit=' + limit + '&offset=' + offset);
    return this.http.get(this.url + '?limit=' + limit + '&offset=' + offset);
  }

  getMoreData(name: string) {
    return this.http.get(this.url + '/' + name);
  }
}