import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  constructor(private http: HttpClient) {}
  pokeUrl = 'https://pokeapi.co/api/v2/pokemon';
  pokeEvoUrl = 'https://pokeapi.co/api/v2/evolution-chain';

  getPokemon(limit: number, offset: number): Observable<any> {
    return this.http.get(
      this.pokeUrl + '?limit=' + limit + '&offset=' + offset
    );
  }

  getPokemonDetails(name: string) {
    return this.http.get(this.pokeUrl + '/' + name);
  }

  getPokemonSpeciesDetails(name: string) {
    return this.http.get(this.pokeUrl + '-species/' + name);
  }

  getPokemonEvolutionChain(id: number): Observable<any> {
    return this.http.get(`${this.pokeEvoUrl}/${id}`);
  }
}
