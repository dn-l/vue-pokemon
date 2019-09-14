import sortByNumber from '@/components/PokemonList/sortByNumber';
import Pokemon from '@/components/PokemonList/Pokemon';

const numberToPokemon = (number: string) => ({ number } as Pokemon);

describe('sortByNumber.ts', () => {
  it('sorts pokemons by number', () => {
    const arr = ['004', '002', '005', '003', '001'].map(numberToPokemon);
    const expectedResult = ['001', '002', '003', '004', '005'].map(numberToPokemon);
    expect(sortByNumber(arr)).toEqual(expectedResult);
  });
});
