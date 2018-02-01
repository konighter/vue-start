<template>
  <div id="app">

    <router-link to="/"><img src="./assets/logo.png"></router-link>
    <ul>
      <li><router-link to="/foo">Go to Foo</router-link></li>
      <li><router-link to="/bar">Go to bar</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
