import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Bar from '@/components/Bar'
import Foo from '@/components/Foo'
import user from '@/vuex/store';

Vue.use(Router)

 const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta : {
        requireAuth : false
      }
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo,
      meta : {
        requireAuth : false
      }
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar,
      meta : {
        requireAuth : true
      }
    }

  ]
})
router.beforeEach((to, from, next) => {
  console.log(user.getters.isLogin);
  console.log(from);
  console.log(to);
  console.log(`beforeEach - from : ${from}, to:${to}`);
  if (to.meta.requireAuth && !user.getters.isLogin ) {
    alert('未登录,需要登录')
  } else {
    next();
  }

});

export default router
