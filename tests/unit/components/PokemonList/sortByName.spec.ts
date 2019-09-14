import sortByName from '@/components/PokemonList/sortByName';
import Pokemon from '@/components/PokemonList/Pokemon';

const nameToPokemon = (name: string) => ({ name } as Pokemon);

describe('sortByName.ts', () => {
  it('sorts pokemons by name', () => {
    const arr = ['Pikachu', 'Ditto', 'Bulbasaur', 'Snorlax'].map(nameToPokemon);
    const expectedResult = ['Bulbasaur', 'Ditto', 'Pikachu', 'Snorlax'].map(nameToPokemon);
    expect(sortByName(arr)).toEqual(expectedResult);
  });
});
