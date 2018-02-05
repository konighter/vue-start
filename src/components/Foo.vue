<template>
  <div class='home'>
    <h1>{{ msg }}</h1>
    <h1>{{reversedMsg}}</h1>
    <input v-model="msg" />
    <button type="button" @click="info" >点击</button>
    <h1>if {{user.user_info.userName}} login: {{isLogin}}</h1>
  </div>

</template>

<script>
import { mapGetters,mapState } from 'vuex'
export default {
  name: 'Foo',
  data () {
    return {
     msg : 'Welcome to Your Foo'
   }
  },
  created () {
    console.log(this.$store.state.user.login)
    console.log(this.$store.state.user.user_info.userName)
  },
  watch : {
    msg : function (newV, oldV) {
      console.log(`newValue is ${newV}, oldValue is ${oldV}`)
      if (newV.indexOf('?') !== -1) {
        this.$store.commit('login', {user: {name:'登录用户1',userId: 923424}, login : true})
      } else {
        this.$store.commit('login', {user: {name:'未登录用户',userId: 923424}, login : false})
      }
    }
  },
  computed : {
    reversedMsg : function () {
      console.log('computed: reversedMsg')
      return this.msg.split('').reverse().join('')
    },
    ...mapGetters(['isLogin']),
    ...mapState(['user'])
  },
  methods : {
      info : function ( event) {
        // alert(msg)
        console.log(event)
      },
      scrollInfo : function (event) {
        console.log(event)
      },
      submit : function () {
        alert('submit')
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
