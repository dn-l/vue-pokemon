import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import FilterBar from '@/components/FilterBar.vue';

const localVue = createLocalVue();
Vue.use(Vuetify);
localVue.use(Vuex);
localVue.use(VueRouter);

const store = new Vuex.Store({
  state: { filterParams: {} },
});

describe('FilterBar.vue', () => {
  const wrapper = shallowMount(FilterBar, {
    store,
    localVue,
  });

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
