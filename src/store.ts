import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import State, { FilterParams, SortBy } from './State';

Vue.use(Vuex);

export default new Vuex.Store<State>({
  state: {
    favourites: [],
    filterParams: {
      showOnlyFavourite: false,
      showEvolutions: false,
    },
    sortBy: SortBy.Name,
  },

  getters: {
    isFavourite(state) {
      return (id: string) => state.favourites.includes(id);
    },
  },

  mutations: {
    toggleFavourite(state, id) {
      if (state.favourites.includes(id)) {
        state.favourites = state.favourites.filter(likedId => likedId !== id);
      } else {
        state.favourites = [...state.favourites, id];
      }
    },
    setFilter(state, newFilterParams: FilterParams) {
      state.filterParams = {
        ...state.filterParams,
        ...newFilterParams,
      };
    },
    setSortBy(state, sortBy: SortBy) {
      state.sortBy = sortBy;
    },
  },

  actions: {
    toggleFavourite({ commit }, id) {
      commit('toggleFavourite', id);
    },
    setFilter({ commit }, newFilterParams: FilterParams) {
      commit('setFilter', newFilterParams);
    },
    setSortBy({ commit }, sortBy: SortBy) {
      commit('setSortBy', sortBy);
    },
  },
  plugins: [createPersistedState()],
});
