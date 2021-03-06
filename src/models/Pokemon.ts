import { Sprite } from 'src/models/Sprite';
import { PokemonSpecies } from './Pokemon_Species';
import { Region } from './Region';
import {Type} from './Type';

export class Pokemon {
    id: number;
    name: string;
    weight: number;
    height: number;
    sprites: Sprite;
    pokemonSpecies: PokemonSpecies;
    votes: number;
    rank: number;
    region_id: number;
    region: Region;
    types: Type;
}
