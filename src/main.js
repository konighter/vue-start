// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Vuex
import Vuex from 'vuex'
import store from './vuex/store'
import BootstrapVue from 'bootstrap-vue'


Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.component('counter-js',{
  template : `<div><div> countor is {{count}}</div><button @click='increase' value='增加' /></div>`,
  data () {
    return {
      count : 0
    }
  },
  methods : {
    increase : function () {
      this.count += 1;
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Vuex,
  store,
  components: { App },
  template: '<App/>'
})
