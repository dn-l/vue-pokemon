import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import { routes } from '@/router';
import PokemonList from '@/components/PokemonList/index.vue';

const pokemons = [
  { id: '1', name: 'Pikachu' },
  { id: '2', name: 'Bulbasaur' },
];

const localVue = createLocalVue();
Vue.use(Vuetify);
localVue.use(Vuex);
localVue.use(VueRouter);

const router = new VueRouter({ routes });

const store = new Vuex.Store({
  state: { filterParams: { } },
});

describe('PokemonList.vue', () => {
  const wrapper = shallowMount(PokemonList, {
    propsData: { pokemons },
    store,
    localVue,
    router,
  });

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
