import Pokemon from './Pokemon';

export default (pokemons: Pokemon[]) => pokemons
  .sort((a: Pokemon, b: Pokemon) => Number(a.number) - Number(b.number));
