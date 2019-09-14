import Vue from 'vue';
import Router from 'vue-router';
import Pokemons from './views/Pokemons.vue';

export const routes = [
  {
    path: '/',
    name: 'pokemons',
    component: Pokemons,
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon',
    component: () => import(/* webpackChunkName: "pokemon" */ './views/Pokemon.vue'),
  },
  {
    path: '*',
    redirect: '/',
  },
];

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
