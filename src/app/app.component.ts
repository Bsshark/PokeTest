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

    this.pokeService.getPokemonByName(name).subscribe((data => {
      this.pokemon = data;
      this.pokeService.getPokedexEntryById(this.pokemon.id).subscribe((dataPokedex => {
        this.pokemon.pokemonSpecies = dataPokedex;
      }));
    }));

  }
}

