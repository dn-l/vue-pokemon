<template>
  <v-card
      raised
      class="ma-4"
      width="15em"
      :loading="pokemon.isLoading"
    >
      <v-img
        height="15em"
        position="top"
        :src="pokemon.image"
      >
      </v-img>
      <v-card-title>{{pokemon.name || '&nbsp;'}}</v-card-title>
      <v-card-actions>
        <v-btn @click="toggleFavourite" icon>
          <v-icon v-if="isFavourite">mdi-heart</v-icon>
          <v-icon v-else>mdi-heart-outline</v-icon>
        </v-btn>
        <div class="flex-grow-1"></div>
        <v-btn outlined :to="learnMoreRoute">
          Learn more
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Pokemon from './PokemonList/Pokemon';

export default Vue.extend({
  props: ['pokemon'],
  methods: {
    toggleFavourite() {
      this.$store.dispatch('toggleFavourite', this.$props.pokemon.id);
    },
  },
  computed: {
    isFavourite() {
      return this.$store.getters.isFavourite(this.pokemon.id);
    },
    learnMoreRoute() {
      const pokemon = this.pokemon as Pokemon;
      if (pokemon.isLoading) {
        return {};
      }
      return {
        name: 'pokemon',
        params: { id: pokemon.id },
      };
    },
  },
});
</script>
