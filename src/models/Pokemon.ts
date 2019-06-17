import { Sprite } from 'src/models/Sprite';
import { PokemonSpecies } from './Pokemon_Species';

export class Pokemon {
    id: number;
    name: string;
    weight: number;
    height: number;
    sprites: Sprite;
    pokemonSpecies: PokemonSpecies;
    votes: number;
}
