<template>
    <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Home App'
    }
  },
  created () {
    console.log('home created~~~~~~~~~~')
  },
  mounted () {
    console.log('home mounted~~~~~~~~~~')
  },
  beforeDestroy () {
    console.log('home beforeDestroy~~~~~~~~~~')
  },
  destroyed () {
    console.log('home destroyed~~~~~~~~~~')
  },
  updated () {
    console.log('home change~~~~~~~~~~~~~')
  },
  beforeUpdate () {
    console.log('home beforeUpdate~~~~~~~~~~~~~')
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
