<template>
  <div class="">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg">
    <counter :message="msg"></counter>
  </div>

</template>

<script>
import Counter from './Counter'
export default {
  name: 'Bar',
  data () {
    return {
      msg: 'Welcome to Your Bar App'
    }
  },
  components : {
    Counter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
