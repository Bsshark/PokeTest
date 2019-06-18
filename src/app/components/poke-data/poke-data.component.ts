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


  constructor(
    private http: HttpClient,
    private pokeService: PokeServiceService
  ) {
    this.pokemonList = [];
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    let pokemonText: string[];
    this.http.get('../../assets/Files/PokeData.txt', {responseType: 'text'}).subscribe(data => {
      pokemonText = data.toString().split('\n');
      const self = this;
      pokemonText.forEach(function(pokemonLine) {
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
              self.pokemonList.push(pokemon);
              console.log(pokemon.id + " : " + pokemon.name);
            }));
          }
      });
    });
  }


}
