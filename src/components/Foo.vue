<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <h1>{{reversedMsg}}</h1>
    <input v-model="msg" />
  </div>

</template>

<script>
export default {
  name: 'Foo',
  data () {
    return {
     msg: 'Welcome to Your Foo'
   }
  },
  computed : {
    reversedMsg : function () {
      console.log('computed: reversedMsg')
      return this.msg.split('').reverse().join('')
    }
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
