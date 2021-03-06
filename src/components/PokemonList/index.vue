<template>
  <v-container>
    <v-row justify="space-around" align="center">
      <PokemonCard :pokemon="pokemon" :key="pokemon.id" v-for="pokemon in filteredPokemons" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import memoize from 'fast-memoize';
import PokemonCard from '../PokemonCard.vue';
import Pokemon from './Pokemon';
import filterShowOnlyFavourites from './filterShowOnlyFavourites';
import filterWithoutEvolutions from './filterWithoutEvolutions';
import sortByName from './sortByName';
import sortByNumber from './sortByNumber';
import sortByDamage from './sortByDamage';
import State, { SortBy } from '../../State';

const memoizedFilterWithoutEvolutions = memoize(filterWithoutEvolutions);

export default Vue.extend({
  props: ['pokemons'],

  components: {
    PokemonCard,
  },

  computed: {
    filteredPokemons() {
      let pokemons = this.$props.pokemons as Pokemon[];
      const {
        favourites,
        filterParams: {
          showOnlyFavourite,
          showEvolutions,
        },
        sortBy,
      } = this.$store.state as State;

      if (!showEvolutions) {
        pokemons = memoizedFilterWithoutEvolutions(pokemons);
      }

      if (showOnlyFavourite) {
        pokemons = filterShowOnlyFavourites(pokemons, favourites);
      }

      switch (sortBy) {
        case SortBy.Number:
          return sortByNumber(pokemons);

        case SortBy.Damage:
          return sortByDamage(pokemons);

        // SortBy.Name
        default:
          return sortByName(pokemons);
      }
    },
  },
});
</script>
