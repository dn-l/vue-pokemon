<template>
  <div>
  <FilterBar />
  <ApolloQuery
    :query="require('../graphql/Pokemons.gql')"
    :variables="{ first: 1000 }"
  >
    <template v-slot="{ result: { error, data }, isLoading }">
      <div v-if="isLoading" class="text-center">
        <v-container>
          <v-row justify="space-around" align="center">
            <PokemonCard :pokemon="{isLoading: true}" :key="n" v-for="n in 20" />
          </v-row>
        </v-container>
      </div>
      <v-alert type="error" v-else-if="error || !data.pokemons">
        An error occured
      </v-alert>
      <div v-else class="text-center">
        <PokemonList :pokemons="data.pokemons" />
      </div>
    </template>
</ApolloQuery>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PokemonList from '../components/PokemonList/index.vue';
import PokemonCard from '../components/PokemonCard.vue';
import FilterBar from '../components/FilterBar.vue';

export default Vue.extend({
  components: {
    PokemonList,
    PokemonCard,
    FilterBar,
  },
});
</script>
