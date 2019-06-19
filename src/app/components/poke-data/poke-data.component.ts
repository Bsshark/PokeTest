import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from '../../../services/poke-service.service';
import { HttpClient} from '@angular/common/http';
import {Pokemon} from '../../../models/Pokemon';


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


  constructor(
    private http: HttpClient,
    private pokeService: PokeServiceService
  ) {
    this.pokemonList = [];
    this.nPokeRows = 8;
    this.pokemonFrom = 0;
    this.pokemonTo = 20;
  }

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadData(event) {

  }
  loadPokemons() {
    let pokemonText: string[];
    this.http.get('../../assets/Files/PokeData.txt', {responseType: 'text'})

      .subscribe(data => {
      pokemonText = data.toString().split('\n');
      const self = this;
      pokemonText.slice(this.pokemonFrom, (this.pokemonTo + 1)).forEach(function(pokemonLine) {
        const pokeStats = pokemonLine.split(',');
          let pokemon: Pokemon;
          const name = pokeStats[0];
          if (name !== 'Pokemon') {
            const votes = pokeStats[1];

            const rank = pokeStats[2];

            self.pokeService.getPokemonByName(name).subscribe((result => {
              pokemon = result;
              pokemon.votes = +votes;
              pokemon.rank = +rank;
              self.pokemonList = [...self.pokemonList, pokemon];
              console.log(self.pokemonList.length);
            }));
          }
      });

    });
  }


}
