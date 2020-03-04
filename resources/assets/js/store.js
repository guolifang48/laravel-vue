/**
 * Project Vuex Store
 *
 * All components consume dynamic data from this store.
 * This store hets populated through the CMS API.
 *
 * [State:page] Current visible page
 * [State:views] DATA for the SEO of all views/routes/pages
 * [State:components] DATA for all components
 * [State:auth] Is user authenticated
 *
 */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import _ from'lodash';

Vue.use(Vuex)

import router from './router'
import { merge } from './helpers'

// import createPersistedState from 'vuex-persistedstate';
// import * as Cookies from 'js-cookie';

let token = document.head.querySelector('meta[name="csrf-token"]');

axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN': window.csrf_token
}

export default new Vuex.Store({
  state: {
    page: 'home',

    views: {},

    posts: {},

    components: {
      ui: {},
      posts_summaries: [],
      posts: {},
    },

    auth: false
  },




  mutations: {
    updatePage(state, pageName) {
      state.page = pageName
    },

    addData(state, { route, data }) {
      state.page = route;

      // Catch Views SEO
      state.views[`${route}`] = { seo: data.seo };

      // Catch Component Data
      for (const key of Object.keys(data.components)) {
        let thisKey = state.components[key];
        let thisValue = data.components[key];

        // Element doesn't exist in the state
        if (!thisKey) {
          state.components[key] = thisValue;
          return;
        }

        // Element exists, and is an array
        if (thisKey.constructor === Array) {
          if (thisValue.constructor === Array) {
            thisValue.forEach(function(el) {
              if (el.id) {
                  if (!state.components[key].find(each => each.id == el.id)) {
                      state.components[key].push(el);
                  }
              } else {
                  state.components[key].push(el);
              }
            });
          } else {
              state.components[key].push(thisValue);

          }
          return;
        }

        // Element exists, and is an object
        if (typeof thisKey === 'object' && thisKey.constructor === Object) {
          switch (route) {
            case 'post': state.components[key][thisValue.slug] = thisValue; break;
            default: state.components[key] = thisValue; break;
          }
          return;
        }

        //-
      }
    }
  },

  getters: {
    getPost(state) {
      return slug => state.components.posts[slug] || {}
    },

    getPostSummary(state) {
      return state.components.posts_summaries;
    }
  },

  actions: {},
})
