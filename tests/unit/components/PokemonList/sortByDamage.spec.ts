import sortByDamage from '@/components/PokemonList/sortByDamage';
import Pokemon from '@/components/PokemonList/Pokemon';

const damageToPokemon = ([
  damageFast,
  damageSpecial,
]: number[]) => ({
  attacks: {
    fast: [
      { damage: damageFast },
    ],
    special: [
      { damage: damageSpecial },
    ],
  },
} as Pokemon);

describe('sortByDamage.ts', () => {
  it('sorts pokemons by damage', () => {
    const arr = [[7, 1], [3, 4], [1, 6], [5, 6]].map(damageToPokemon);
    const expectedResult = [[3, 4], [1, 6], [5, 6], [7, 1]].map(damageToPokemon);
    expect(sortByDamage(arr)).toEqual(expectedResult);
  });
});
