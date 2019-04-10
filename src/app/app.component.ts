import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from '../services/poke-service.service';
import { Pokemon } from '../models/Pokemon';
import { FormGroup } from '@angular/forms';
import {FlavorTextEntries} from '../models/Flavor_Text_Entries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  public pokeForm: FormGroup;

  public pokemon: Pokemon;
  public name: string;
  public langDesc: FlavorTextEntries;
  constructor(private pokeService: PokeServiceService) {

  }
  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }

  onSearchChange(searchValue: string) {
    this.pokeService.getPokemonByName(searchValue).subscribe((data => {
      this.pokemon = data;
      this.pokeService.getPokedexEntryById(this.pokemon.id).subscribe((dataPokedex => {
        this.pokemon.pokemonSpecies = dataPokedex;
        this.updateData();
      }));
    }));
  }

  updateData() {
    this.langDesc = this.pokemon.pokemonSpecies.flavor_text_entries.find(x => x.language.name === 'es');
  }
}

