import Pokemon from './Pokemon';

export default (pokemons: Pokemon[]) => {
  const pokemonIsNotAnEvolution = (pokemon: Pokemon) => pokemons
    .every(({ evolutions }) => !evolutions
      || evolutions.every(({ id }) => id !== pokemon.id));
  return pokemons.filter(pokemonIsNotAnEvolution);
};
