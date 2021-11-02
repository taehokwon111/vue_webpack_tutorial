import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-Router'

Vue.use(VueRouter);
Vue.config.productionTip = false

const test_route1 = {template: '<h1>Test_route1</h1>'}
const test_route2 = {template: '<h1>Test_route2</h1>'}

new Vue({
  render: h => h(App),
}).$mount('#app')
