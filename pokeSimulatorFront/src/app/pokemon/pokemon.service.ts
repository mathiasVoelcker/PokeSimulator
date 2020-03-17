import { Injectable } from '@angular/core';
import { MainService } from '../shared/services/main.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './entities/pokemon';

@Injectable()
export class PokemonService extends MainService {

  constructor(
    private http: HttpClient) {
    super('pokemons/');
  }

  listPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.url}getAll`, { headers: this.headers });
  }

  getPokemon(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.url}getByid/${id}`, { headers: this.headers });
  }

  savePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(`${this.url}create`, pokemon, { headers: this.headers });
  }

  updatePokemon(pokemon: Pokemon, id: string): Observable<Pokemon> {
    return this.http.put<Pokemon>(`${this.url}update/${id}`, pokemon, { headers: this.headers })
  }

  deletePokemon(id: number): Observable<Pokemon> {
    return this.http.delete<Pokemon>(`${this.url}delete/${id}`, { headers: this.headers });
  }

}
