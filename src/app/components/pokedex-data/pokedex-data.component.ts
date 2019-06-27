import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Pokemon} from '../../../models/Pokemon';
import {FlavorTextEntries} from '../../../models/Flavor_Text_Entries';
import {PokeServiceService} from '../../../services/poke-service.service';

@Component({
  selector: 'app-pokedex-data',
  templateUrl: './pokedex-data.component.html',
  styleUrls: ['./pokedex-data.component.css']
})
export class PokedexDataComponent implements OnInit {

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
    this.langDesc = this.pokemon.pokemonSpecies.flavor_text_entries.find(x => x.language.name === 'fr');
  }


}
