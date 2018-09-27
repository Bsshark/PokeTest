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



  constructor(
    private http: HttpClient
  ) {
    this.URL = 'https://pokeapi.co/api/v2/pokemon/';
  }



  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.URL + name.toLowerCase());
  }
}
