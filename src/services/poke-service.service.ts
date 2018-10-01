import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/Pokemon';
import { HttpHeaders } from '@angular/common/http';
import { PokemonSpecies } from '../models/Pokemon_Species';



@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  URL_POKEMON: string;
  URL_SPECIES: string;
  // let headers = new Headers({'Content-Type': 'application/json'});
  // let params: URLSearchParams = new URLSearchParams();



  constructor(
    private http: HttpClient
  ) {
    this.URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon/';
    this.URL_SPECIES = 'https://pokeapi.co/api/v2/pokemon-species/';

  }

  getPokemonById(id: number): Observable<Pokemon> {
    // params.set('name', name);
    return this.http.get<Pokemon>(this.URL_POKEMON + id);
  }

  getPokedexEntryById(id: number): Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(this.URL_SPECIES + id);
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    // params.set('name', name);
    return this.http.get<Pokemon>(this.URL_POKEMON + name.toLowerCase());
  }
}
