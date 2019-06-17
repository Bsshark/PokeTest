import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {PokedexDataComponent} from './components/pokedex-data/pokedex-data.component';
import {PokeDataComponent} from './components/poke-data/poke-data.component';

const routes: Routes = [
  {
    path: 'pokedex',
    component: PokedexDataComponent
  },
  {
    path: 'pokedata',
    component: PokeDataComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
