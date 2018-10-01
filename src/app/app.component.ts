import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from '../services/poke-service.service';
import { Pokemon } from '../models/Pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  public pokemon: Pokemon;
  public name: string;
  constructor(private pokeService: PokeServiceService) {

  }
  ngOnInit(): void {

    this.pokeService.getPokemonById(2).subscribe((data => {
      this.pokemon = data;
    }));

    this.pokeService.getPokedexEntryById(2).subscribe((data => {
      this.pokemon.pokemonSpecies = data;
    }));

    // console.log(this.pokemonName);

  }
}

