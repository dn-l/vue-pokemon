<template>
  <v-row justify="space-around" align="center" class="pa-2">
    <v-col>
      <v-switch
        :input-value="filterParams.showOnlyFavourite"
        @change="setFilter('showOnlyFavourite', $event)"
        label="Only Favourites"
      />
    </v-col>
    <v-col>
      <v-switch
        :input-value="filterParams.showEvolutions"
        @change="setFilter('showEvolutions', $event)"
        label="Show Evolutions"
      />
    </v-col>
    <v-col>
      <v-select v-model="sortBy" :items="sortByOptions" label="Sort by" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { SortBy } from '../State';

export default Vue.extend({
  computed: {
    filterParams() {
      return this.$store.state.filterParams;
    },
    sortByOptions() {
      return Object.keys(SortBy);
    },
    sortBy: {
      get() {
        return this.$store.state.sortBy;
      },
      set(sortBy) {
        return this.$store.dispatch('setSortBy', sortBy);
      },
    },
  },

  methods: {
    setFilter(name: string, value: boolean) {
      this.$store.dispatch('setFilter', { [name]: value });
    },
  },
});
</script>
