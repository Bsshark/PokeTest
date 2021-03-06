import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/Pokemon';
import { PokemonSpecies } from '../models/Pokemon_Species';
import {Region} from '../models/Region';
import { forkJoin } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  API_URL_POKEMON: string;
  API_URL_SPECIES: string;
  LOCAL_DATA: string;
  URL_ALL_POKEMON: string;
  URL_ALL_REGIONS: string;
  // let headers = new Headers({'Content-Type': 'application/json'});
  // let params: URLSearchParams = new URLSearchParams();



  constructor(
    private http: HttpClient
  ) {
    this.API_URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon/';
    this.API_URL_SPECIES = 'https://pokeapi.co/api/v2/pokemon-species/';
    this.LOCAL_DATA = '../../assets/Files/PokeData.txt';
    this.URL_ALL_POKEMON = 'http://localhost:8080/api/pokemon/all';
    this.URL_ALL_REGIONS = 'http://localhost:8080/api/regions';
  }
  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.API_URL_POKEMON + id);
  }

  getPokedexEntryById(id: number): Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(this.API_URL_SPECIES + id);
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    const newName = this.convertToAPIName(name);
    return this.http.get<Pokemon>(this.API_URL_POKEMON + newName.toLowerCase());
  }

  getPokemonFromTo(from: number, to: number): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.API_URL_POKEMON + '?offset=' + from + '&limit=' + to);
  }

  getAllPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.URL_ALL_POKEMON);
  }

  getAllRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(this.URL_ALL_REGIONS);
  }

  getAllPokemonAndAllRegions(): Observable<any[]> {
    let pokemonList = this.http.get<Pokemon[]>(this.URL_ALL_POKEMON);
    let regionList = this.http.get<Region[]>(this.URL_ALL_REGIONS);

    return forkJoin([pokemonList, regionList]);
  }


  //Logic checks
  convertToAPIName(name: string): string {
    name = name.toLowerCase();
    switch (name) {
      case 'deoxys':
        return 'Deoxys-normal';
        break;
      case 'mimikyu':
        return 'Mimikyu-disguised';
        break;
      case 'aegislash':
        return 'Aegislash-shield';
        break;
      case 'giratina':
        return 'Giratina-altered';
        break;
      case 'shaymin':
        return 'Shaymin-land';
        break;
      case 'lycanroc':
        return 'Lycanroc-midday';
        break;
      case 'meowstic':
        return 'Meowstic-male';
        break;
      case 'meloetta':
        return 'Meloetta-aria';
        break;
      case 'pumpkaboo':
        return 'pumpkaboo-average';
        break;
      case 'gourgeist':
        return 'gourgeist-average';
        break;
      case 'keldeo':
        return 'keldeo-ordinary';
        break;
      case 'oricorio':
        return 'oricorio-baile';
        break;
      case 'darmanitan':
        return 'darmanitan-standard';
        break;
      case 'minior':
        return 'minior-red-meteor';
        break;
      case 'basculin':
        return 'basculin-red-striped';
        break;
      case 'wishiwashi':
        return 'wishiwashi-solo';
        break;
      case 'wormadam':
        return 'wormadam-plant';
        break;
      case 'thundurus':
        return 'thundurus-incarnate';
        break;
      case 'tornadus':
        return 'tornadus-incarnate';
        break;
      case 'landorus':
        return 'landorus-incarnate';
        break;
      default:
        return name;
        break;
    }
  }

  convertToNormalName(name: string): string {
    name = name.toLowerCase();
    switch (name) {
      case 'deoxys-normal':
        return 'Deoxys';
        break;
      case 'mimikyu-disguised':
        return 'Mimikyu';
        break;
      case 'Aegislash-shield':
        return 'aegislash';
        break;
      case 'Giratina-altered':
        return 'giratina';
        break;
      case 'Shaymin-land':
        return 'shaymin';
        break;
      case 'Lycanroc-midday':
        return 'lycanroc';
        break;
      case 'Meowstic-male':
        return 'meowstic';
        break;
      case 'Meloetta-aria':
        return 'meloetta';
        break;
      case 'pumpkaboo-average':
        return 'pumpkaboo';
        break;
      case 'gourgeist-average':
        return 'gourgeist';
        break;
      case 'keldeo-ordinary':
        return 'keldeo';
        break;
      case 'oricorio-baile':
        return 'oricorio';
        break;
      case 'darmanitan-standard':
        return 'darmanitan';
        break;
      case 'minior-red-meteor':
        return 'minior';
        break;
      case 'basculin-red-striped':
        return 'basculin';
        break;
      case 'wishiwashi-solo':
        return 'wishiwashi';
        break;
      case 'wormadam-plant':
        return 'wormadam';
        break;
      case 'thundurus-incarnate':
        return 'thundurus';
        break;
      case 'tornadus-incarnate':
        return 'tornadus';
        break;
      case 'landorus-incarnate':
        return 'landorus';
        break;
      default:
        return name;
        break;
    }
  }
}
