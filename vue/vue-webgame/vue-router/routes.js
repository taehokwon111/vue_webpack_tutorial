import Vue from 'vue';
import VueRouter from 'vue-router';
import ResponseCheck from '../4.반응속도체크/ResponseCheck.vue';
import RockScissorsPaper from '../5.가위바위보/RockScissorsPaper.vue'
import gameMatcher from './GameMatcher.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {path: "/game/index", component: gameMatcher},
    {path: "/game/rock-scissors-paper", component: RockScissorsPaper},
    {path: "/game/response-Check", component: ResponseCheck}


  ]
});
