<template>
<div>
  <v-row class="pa-2">
    <v-col>
      <v-btn @click="goBack">Back</v-btn>
    </v-col>
  </v-row>
  <v-divider />
  <ApolloQuery
    :query="require('../graphql/Pokemon.gql')"
    :variables="{ id: $route.params.id }">
    <template v-slot="{ result: { error, data }, isLoading }">
      <v-row v-if="isLoading" justify="space-around" align="center" class="pa-2">
        <v-progress-circular indeterminate />
      </v-row>
      <v-alert v-else-if="error || !data.pokemon" type="error" class="ma-2">
        An error occured
      </v-alert>
      <div v-else>
        <h1 class="ma-2" v-text="data.pokemon.name" />
        <v-row>
          <v-col>
            <v-img :src="data.pokemon.image" width="300" class="pa-2" />
            <h2 class="ma-2">
              Resistant to
              <v-chip
                v-for="resistance in data.pokemon.resistant"
                v-text="resistance"
                :key="resistance"
                class="ma-2"
              />
            </h2>
            <PokemonAttacks :attacks="data.pokemon.attacks" class="pa-2" />
            <PokemonEvolutions :evolutions="data.pokemon.evolutions" class="pa-2" />
          </v-col>
        </v-row>
      </div>
    </template>
  </ApolloQuery>
</div>

</template>

<script lang="ts">
import Vue from 'vue';
import PokemonAttacks from '../components/PokemonAttacks.vue';
import PokemonEvolutions from '../components/PokemonEvolutions.vue';

interface PokemonView extends Vue {
  fromRoute: any;
}

export default Vue.extend({
  components: {
    PokemonAttacks,
    PokemonEvolutions,
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
});
</script>
