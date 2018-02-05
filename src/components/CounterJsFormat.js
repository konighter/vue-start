import Vue from 'vue'
const CounterJs = Vue.component('counter-js',{
  template : `<div> countor is {{count}}</div><button @click='increase' value='增加' />`,
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

export default {
  CounterJs
}
