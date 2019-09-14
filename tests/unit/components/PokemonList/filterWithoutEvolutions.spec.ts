import filterWithoutEvolutions from '@/components/PokemonList/filterWithoutEvolutions';
import Pokemon from '@/components/PokemonList/Pokemon';

const idToPokemon = ([id, evolutionId]: string[]) => ({
  id,
  evolutions: evolutionId ? [{
    id: evolutionId,
  }] : null,
} as Pokemon);

describe('filterWithoutEvolutions.ts', () => {
  it('filters out evolutions', () => {
    const arr = [['1', '2'], ['2'], ['3', '4'], ['4']].map(idToPokemon);
    const expectedResult = [['1', '2'], ['3', '4']].map(idToPokemon);
    expect(filterWithoutEvolutions(arr)).toEqual(expectedResult);
  });
});
