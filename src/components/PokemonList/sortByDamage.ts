import Pokemon from './Pokemon';

const getPokemonDamage = (
  { attacks: { fast, special } }: Pokemon,
) => Math.max(...[
  ...fast.map(({ damage }) => damage),
  ...special.map(({ damage }) => damage),
]);

export default (pokemons: Pokemon[]) => pokemons
  .sort((a: Pokemon, b: Pokemon) => getPokemonDamage(a) - getPokemonDamage(b));
