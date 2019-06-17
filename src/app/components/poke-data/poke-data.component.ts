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

  public allData: string;
  constructor(
    private http: HttpClient,
    private pokeService: PokeServiceService
  ) {

  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.http.get('../../assets/Files/PokeData.txt', {responseType: 'text'}).subscribe(data => {
      console.log(data.toString().split('\n'));
      for(const pokemonText in data.toString().split('\n')){
        const pokemonData = pokemonText.split(',');
        const pokemon: Pokemon;

        this.pokeService.getPokemonByName(pokemonData[0]).subscribe(data => {
          console.log(data);
        });

      }
    });
    /*
    for(let pokemon of this.allData){
      console.log(pokemon);
    }*/
  }


}
