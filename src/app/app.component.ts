import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from '../services/poke-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  public pokemonName: string;

  constructor(private pokeService: PokeServiceService) {

  }
  title = 'Pokemon';
  ngOnInit(): void {
    this.pokeService.getPokemon('Charizard').subscribe((data => {
      this.pokemonName = data.name;
    }));

    console.log(this.pokemonName);

  }
}

