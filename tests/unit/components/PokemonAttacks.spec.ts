import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import PokemonAttacks from '@/components/PokemonAttacks.vue';

const localVue = createLocalVue();
Vue.use(Vuetify);

const attacks = {
  fast: [{
    name: 'Punch',
    damage: 1,
    type: 'Simple',
  }],
  special: [{
    name: 'Fireball',
    damage: 100,
    type: 'Magical',
  }],
};

describe('PokemonAttacks.vue', () => {
  const wrapper = shallowMount(PokemonAttacks, {
    propsData: attacks,
    localVue,
  });

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
