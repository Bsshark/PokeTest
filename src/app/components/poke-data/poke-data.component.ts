import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from '../../../services/poke-service.service';
import { HttpClient} from '@angular/common/http';
import {Pokemon} from '../../../models/Pokemon';
import {SelectItem} from 'primeng/api';
import {FlavorTextEntries} from '../../../models/Flavor_Text_Entries';
import {Region} from '../../../models/Region';


@Component({
  selector: 'app-poke-data',
  templateUrl: './poke-data.component.html',
  styleUrls: ['./poke-data.component.css']
})
export class PokeDataComponent implements OnInit {
  public pokemonList: Pokemon[];
  public regionList: Region[];
  public nPokeRows: number;
  public pokemonFrom: number;
  public pokemonTo: number;

  //Data Chart
  dataByRegion: any;
  dataByType: any;
  avgPerRegion: RegionChartModel[];
  pointsPerRegion: number[];

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
    this.avgPerRegion = [];
    this.pointsPerRegion = [];
  }

  ngOnInit(): void {
    this.sortOptions = [
      {label: 'Más votados', value: '!votes'},
      {label: 'Menos votados', value: 'votes'},
      {label: 'Alfabético', value: 'name'}
    ];
    this.loadAll();

  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }


  loadPokemons() {
      this.pokemonList = this.setDefaultData(this.pokemonList);
      //Set regions
    for (let i = 0; i < this.pokemonList.length; i++) {
      const currentPokemon = this.pokemonList[i];

      currentPokemon.region = this.regionList[currentPokemon.region_id];

    }
  }

  setDefaultData(list: Pokemon[]){
    const spriteDefaultString = './src/assets/Img/defaultSprite.png';
    for (let i = 0; i < list.length; i++) {
      if (list[i].sprites.front_default === null) {
        list[i].sprites.front_default = spriteDefaultString;
      }
      if (list[i].sprites.back_default === null) {
        list[i].sprites.back_default = spriteDefaultString;
      }
      if (list[i].sprites.front_shiny === null) {
        list[i].sprites.front_shiny = spriteDefaultString;
      }
      if (list[i].sprites.back_shiny === null) {
        list[i].sprites.back_shiny = spriteDefaultString;
      }
    }
    return list;
  }

  updateData() {
    for (let i = 0; i < this.pokemonList.length; i++){
      this.langDesc = this.pokemonList[i].pokemonSpecies.flavor_text_entries.find(x => x.language.name === 'es');
    }
  }

  loadAll() {
    this.pokeService.getAllPokemonAndAllRegions().subscribe(responseList => {
      this.pokemonList = responseList[0];
      this.regionList = responseList[1];

      this.loadPokemons();
      this.loadRegions();
      this.getAvgVotes();

    });
  }

  //Chart data
  loadRegions() {
    const names = [];

    for (let i = 0; i < this.regionList.length; i++) {
      names.push(this.regionList[i].name_es);
    }
    this.dataByRegion = {
      labels: names,
      datasets: [
        {
          data: this.pointsPerRegion,
          backgroundColor: [
            "#003f5c",
            "#374c80",
            "#7a5195",
            "#bc5090",
            "#ef5675",
            "#ff764a",
            "#ffa600"
          ]
        }
      ]
    };

  }
  loadTypes() {

  }

  getAvgVotes() {
    for (let i = 0; i < this.regionList.length; i++) {
      let avgVotesInRegion = 0;
      let nPokemonInRegion = 0;
      const currentRegion = this.regionList[i];
      for (let j = 0; j < this.pokemonList.length; j++) {
        const currentPokemon = this.pokemonList[j];
        if (currentPokemon.region_id === currentRegion.id) {
          nPokemonInRegion++;
          avgVotesInRegion += currentPokemon.votes;
        }

      }
      avgVotesInRegion = avgVotesInRegion / nPokemonInRegion;
      const newRegion: RegionChartModel = {
        name: currentRegion.name,
        name_es: currentRegion.name_es,
        avgVotes: avgVotesInRegion
      }
      this.avgPerRegion.push(newRegion);
      this.pointsPerRegion.push(+this.avgPerRegion[i].avgVotes.toFixed(2));
    }
  }
}

interface RegionChartModel {
  name: string;
  name_es: string;
  avgVotes: number;
}
