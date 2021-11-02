import Vue from 'vue';
import RouterExample from './RouterExample';

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes // `routes: routes`의 줄임
})

new Vue({
  render: createElement => createElement(RouterExample)
}).$mount('#app');
 