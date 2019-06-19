import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/Pokemon';
import { PokemonSpecies } from '../models/Pokemon_Species';



@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  URL_POKEMON: string;
  URL_SPECIES: string;
  LOCAL_DATA: string;
  // let headers = new Headers({'Content-Type': 'application/json'});
  // let params: URLSearchParams = new URLSearchParams();



  constructor(
    private http: HttpClient
  ) {
    this.URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon/';
    this.URL_SPECIES = 'https://pokeapi.co/api/v2/pokemon-species/';
    this.LOCAL_DATA = '../../assets/Files/PokeData.txt';
  }
  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.URL_POKEMON + id);
  }

  getPokedexEntryById(id: number): Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(this.URL_SPECIES + id);
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    const newName = this.convertToAPIName(name);
    return this.http.get<Pokemon>(this.URL_POKEMON + newName.toLowerCase());
  }

  getPokemonFromTo(from: number, to: number): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.URL_POKEMON + '?offset=' + from + '&limit=' + to);
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
}
