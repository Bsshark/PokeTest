import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/Pokemon';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  URL: string;
  // let headers = new Headers({'Content-Type': 'application/json'});
  // let params: URLSearchParams = new URLSearchParams();



  constructor(
    private http: HttpClient
  ) {
    this.URL = 'https://pokeapi.co/api/v2/pokemon/';

  }

  getPokemonById(id: number): Observable<Pokemon> {
    // params.set('name', name);
    return this.http.get<Pokemon>(this.URL + id);
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    // params.set('name', name);
    return this.http.get<Pokemon>(this.URL + name.toLowerCase());
  }
}
