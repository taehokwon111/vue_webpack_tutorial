import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import VueRouterTest from './components/VueRouterTest.vue'
import RouterVue2 from './components/RouterVue2.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {path: "/test1", component: HelloWorld},
    {path: "/test2", component: VueRouterTest},
    {path: "/test3", component: RouterVue2}

  ]
});
