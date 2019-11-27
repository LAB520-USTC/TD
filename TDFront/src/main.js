// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from "vuetify";
import vuetify from "./plugins/vuetify";
import router from './router'
import Vuex from 'vuex'
import store from "./vuex/store";
import axios from 'axios'


Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(Vuex);

Vue.prototype.$axios = axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  store,
  components: { App },
  template: '<App/>'
});
