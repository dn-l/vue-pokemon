import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { routes } from '@/router';
import PokemonCard from '@/components/PokemonCard.vue';

const pokemon = {
  id: '1',
  name: 'Bulbasaur',
  image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
};

const localVue = createLocalVue();
Vue.use(Vuetify);
localVue.use(Vuex);
localVue.use(VueRouter);

const router = new VueRouter({ routes });

const store = new Vuex.Store({
  getters: {
    isFavourite() {
      return () => false;
    },
  },
});

describe('PokemonCard.vue', () => {
  const wrapper = shallowMount(PokemonCard, {
    propsData: { pokemon },
    store,
    localVue,
    router,
  });

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders name', () => {
    expect(wrapper.text()).toMatch(pokemon.name);
  });
});
