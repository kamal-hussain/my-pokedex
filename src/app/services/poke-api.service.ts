import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  constructor(private http: HttpClient) {}
  url = 'https://pokeapi.co/api/v2/pokemon';

  getPokemon(limit: number, offset: number): Observable<any> {
    return this.http.get(this.url + '?limit=' + limit + '&offset=' + offset);
  }

  getPokemonDetails(name: string) {
    return this.http.get(this.url + '/' + name);
  }
}
