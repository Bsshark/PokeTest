import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from '../services/poke-service.service';
import { Pokemon } from '../models/Pokemon';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  public pokeForm: FormGroup;

  public pokemon: Pokemon;
  public name: string;
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
      }));
    }));
  }
}

