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

  constructor(private pokeService: PokeServiceService) {

  }
  title = 'Pokemon';
  ngOnInit(): void {

    this.pokeService.getPokemonById(802).subscribe((data => {
      this.pokemon = data;
    }));

    // console.log(this.pokemonName);

  }
}

