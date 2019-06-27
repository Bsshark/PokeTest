import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from '../../../services/poke-service.service';
import { HttpClient} from '@angular/common/http';
import {Pokemon} from '../../../models/Pokemon';
import {SelectItem} from 'primeng/api';
import {FlavorTextEntries} from '../../../models/Flavor_Text_Entries';


@Component({
  selector: 'app-poke-data',
  templateUrl: './poke-data.component.html',
  styleUrls: ['./poke-data.component.css']
})
export class PokeDataComponent implements OnInit {
  public pokemonList: Pokemon[];
  public allData: string;
  public nPokeRows: number;
  public pokemonFrom: number;
  public pokemonTo: number;

  //Primeng
  sortKey: string;
  sortField: string;
  sortOrder: number;
  sortOptions: SelectItem[];
  langDesc: FlavorTextEntries;

  constructor(
    private http: HttpClient,
    private pokeService: PokeServiceService
  ) {
    this.pokemonList = [];
    this.nPokeRows = 10;
    this.pokemonFrom = 0;
    this.pokemonTo = 20;
  }

  ngOnInit(): void {
    this.sortOptions = [
      {label: 'Más votados', value: '!votes'},
      {label: 'Menos votados', value: 'votes'},
      {label: 'Alfabético', value: 'name'},
      {label: 'Inverso', value: '!name'}
    ]
    this.loadPokemons();
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  loadPokemons() {
    this.pokeService.getAllPokemon()
      .subscribe((data => {
        this.pokemonList = data;
        this.pokemonList = this.setDefaultData(this.pokemonList);
      }));

  }

  setDefaultData(list: Pokemon[]){
    let spriteDefaultString = './src/assets/Img/defaultSprite.png';
    for(let i = 0; i < list.length; i++) {
      if(list[i].sprites.front_default === null){
        list[i].sprites.front_default = spriteDefaultString;
      }
      if(list[i].sprites.back_default === null){
        list[i].sprites.back_default = spriteDefaultString;
      }
      if(list[i].sprites.front_shiny === null){
        list[i].sprites.front_shiny = spriteDefaultString;
      }
      if(list[i].sprites.back_shiny === null){
        list[i].sprites.back_shiny = spriteDefaultString;
      }
    }
    return list;
  }

  updateData() {
    for(let i = 0; i < this.pokemonList.length; i++){
      this.langDesc = this.pokemonList[i].pokemonSpecies.flavor_text_entries.find(x => x.language.name === 'es');
    }

  }
}
