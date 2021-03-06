import entityAction from './entity';
export const REQUEST_POKEDEX = 'REQUEST_POKEDEX';
export const RECEIVE_POKEDEX = 'RECEIVE_POKEDEX';
export const FAILURE_POKEDEX = 'FAILURE_POKEDEX';

export const fetchPokedexIfNeeded = entityAction({
	types: [REQUEST_POKEDEX, RECEIVE_POKEDEX, FAILURE_POKEDEX],
	mapEntitiesToEntity: entities => entities.pokedexById,
	endpoint: 'pokedex'
});

export const REQUEST_POKEMON = 'REQUEST_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';
export const FAILURE_POKEMON = 'FAILURE_POKEMON';

export const fetchPokemonIfNeeded = entityAction({
	types: [REQUEST_POKEMON, RECEIVE_POKEMON, FAILURE_POKEMON],
	mapEntitiesToEntity: entities => entities.pokemonById,
	endpoint: 'pokemon'
});

export const REQUEST_POKEMONSPECIES = 'REQUEST_POKEMONSPECIES';
export const RECEIVE_POKEMONSPECIES = 'RECEIVE_POKEMONSPECIES';
export const FAILURE_POKEMONSPECIES = 'FAILURE_POKEMONSPECIES';

export const fetchPokemonSpeciesIfNeeded = entityAction({
	types: [REQUEST_POKEMONSPECIES, RECEIVE_POKEMONSPECIES, FAILURE_POKEMONSPECIES],
	mapEntitiesToEntity: entities => entities.pokemonSpeciesById,
	endpoint: 'pokemon-species'
});

export const REQUEST_EVOLUTION = 'REQUEST_EVOLUTION';
export const RECEIVE_EVOLUTION = 'RECEIVE_EVOLUTION';
export const FAILURE_EVOLUTION = 'FAILURE_EVOLUTION';

export const fetchEvolutionIfNeeded = entityAction({
    types: [REQUEST_EVOLUTION, RECEIVE_EVOLUTION, FAILURE_EVOLUTION],
    mapEntitiesToEntity: entities => entities.evolutionById,
    endpoint: 'evolution-chain'
});

export const REQUEST_MOVE = 'REQUEST_MOVE';
export const RECEIVE_MOVE = 'RECEIVE_MOVE';
export const FAILURE_MOVE = 'FAILURE_MOVE';

export const fetchMoveIfNeeded = entityAction({
    types: [REQUEST_MOVE, RECEIVE_MOVE, FAILURE_MOVE],
    mapEntitiesToEntity: entities => entities.moveById,
    endpoint: 'move'
});

export const SELECT_POKEDEX = 'SELECT_POKEDEX';

export function selectPokedex(id) {
	return {
		type: SELECT_POKEDEX,
		id: id
	}
}

export const FILTER_POKEDEX = 'FILTER_POKEDEX';

export function filterPokedex(text) {
	return {
		type: FILTER_POKEDEX,
		text: text
	}
}

export const SELECT_MOVE = 'SELECT_MOVE';

export function selectMove(id) {
	return {
		type: SELECT_MOVE,
		id: id
	}
}