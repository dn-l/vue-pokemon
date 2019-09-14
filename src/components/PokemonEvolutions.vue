<template>
  <div>
    <h2>
      Evolutions
    </h2>
    <div v-if="evolutions">
      <v-list tile>
        <v-list-item
          v-for="evolution in evolutions"
          :key="evolution.id"
          :to="{ name: 'pokemon', params: { id: evolution.id} }"
        >
          <v-list-item-avatar>
            <v-img :src="evolution.image"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title  v-text="evolution.name" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
    <div v-else>
      No evolutions
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['evolutions', 'requirements'],
});
</script>
