import Pokemon from './Pokemon';

export default (pokemons: Pokemon[]) => pokemons
  .sort((a: Pokemon, b: Pokemon) => a.name.localeCompare(b.name));
