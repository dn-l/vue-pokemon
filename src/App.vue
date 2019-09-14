<template>
  <v-app>
    <v-app-bar app>
      <router-link to="/" class="toolbar-title black--text">
        <v-toolbar-title class="headline text-uppercase">
          <span>Vue</span>
          <span class="font-weight-light">Pokémon</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/denlb/vue-pokemon"
        target="_blank"
      >Github
        <v-icon>mdi-github-box</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  data: () => ({
    //
  }),
});
</script>

<style scoped>
  .toolbar-title {
    text-decoration: none;
  }
</style>
