import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import List from '@/components/board/List';

Vue.use(Router); //vue 라우터 사용

export default new Router({
    routes:[
        {
         path:'/',
         name:HelloWorld,
         component:HelloWorld,   
        },
        { 
            path: '/board/list',
            name:List,
            component:List
        }
    ]
})