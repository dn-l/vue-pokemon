import filterShowOnlyFavourites from '@/components/PokemonList/filterShowOnlyFavourites';
import Pokemon from '@/components/PokemonList/Pokemon';

const idToPokemon = (id: string) => ({ id } as Pokemon);

describe('filterShowOnlyFavourites.ts', () => {
  it('filters only favourites', () => {
    const arr = ['1', '2', '3'].map(idToPokemon);
    const expectedResult = ['1'].map(idToPokemon);
    const favourites = ['1'];
    expect(filterShowOnlyFavourites(arr, favourites)).toEqual(expectedResult);
  });
});
