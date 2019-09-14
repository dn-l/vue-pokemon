import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { mount, createLocalVue } from '@vue/test-utils';
import { routes } from '@/router';
import PokemonEvolutions from '@/components/PokemonEvolutions.vue';

const evolutions = [
  {
    id: '1',
    name: 'Ivysaur',
    image: 'https://img.pokemondb.net/artwork/ivysaur.jpg',
  },
  {
    id: '2',
    name: 'Venusaur',
    image: 'https://img.pokemondb.net/artwork/venusaur.jpg',
  },
];

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

describe('PokemonEvolutions.vue', () => {
  const wrapper = mount(PokemonEvolutions, {
    propsData: { evolutions },
    store,
    localVue,
    router,
  });

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it.each(evolutions)('renders %s', (evolution) => {
    expect(wrapper.text()).toMatch(evolution.name);
  });
});
