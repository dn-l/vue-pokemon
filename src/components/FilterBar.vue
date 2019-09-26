<template>
  <v-toolbar flat>
    <v-switch
      class="mr-2"
      hide-details
      :input-value="filterParams.showOnlyFavourite"
      @change="toggleFilter('showOnlyFavourite')"
      label="Only Favourites"
    />
    <v-switch
      class="mx-2"
      hide-details
      :input-value="filterParams.showEvolutions"
      @change="toggleFilter('showEvolutions')"
      label="Show Evolutions"
    />
    <v-select
      class="sort-by"
      hide-details
      v-model="sortBy"
      :items="sortByOptions"
      prefix="Sort by"
      ref="select"
      full-width
    />
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue';
import { SortBy, FilterParams } from '../State';

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
    toggleFilter(name: string, value: boolean) {
      this.$store.dispatch('setFilter', { [name]: !this.filterParams[name] });
    },
  },
});
</script>

<style>
  sort-by {
    max-width: 100px;
  }
</style>
