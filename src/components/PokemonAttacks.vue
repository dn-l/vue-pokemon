<template>
  <div v-if="attacks">
    <div v-for="(attacks, category) in attacks" :key="category">
      <div v-if="Array.isArray(attacks) && attacks.length" class="my-2">
        <h2 class="text-capitalize">{{ category }} attacks</h2>
        <v-simple-table>
          <thead>
            <tr>
              <th width="50%">Name</th>
              <th>Type</th>
              <th>Damage</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="attack in attacks" :key="attack.name">
              <td width="50%">{{ attack.name }}</td>
              <td>{{ attack.type }}</td>
              <td>{{ attack.damage }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>No attacks</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['attacks'],
});
</script>
