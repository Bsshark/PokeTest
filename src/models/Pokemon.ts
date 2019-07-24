import { Sprite } from 'src/models/Sprite';
import { PokemonSpecies } from './Pokemon_Species';
import { Region } from './Region';
import { Types } from './Types';export class Pokemon {
    id: number;
    name: string;
    weight: number;
    height: number;
    sprites: Sprite;
    pokemonSpecies: PokemonSpecies;
    votes: number;
    rank: number;
    region: Region;
    types: Types;
}
