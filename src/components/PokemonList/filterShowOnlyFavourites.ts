import Pokemon from './Pokemon';

export default (
  pokemons: Pokemon[], favourites: string[],
) => pokemons.filter(({ id }) => favourites.includes(id));
