<<<<<<< HEAD
import Vue from 'vue';
import VueRouter from 'vue-router';


import Registro from '@/components/Registro.vue';
import Success from '@/components/Success.vue';
import NotFound from '@/components/NotFound.vue';
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
      {
        path: '/', 
        component: Registro,
        props: true,
      },
      {        
        path:'/Success/:id',
        component: Success,
        name: 'Success',
        props: true
      },
      {
        path: '*', 
        component: NotFound
      }
    ]
=======
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue'
import Registro from '@/components/Registro.vue';
import Success from '@/components/Success.vue';
import NotFound from '@/components/NotFound.vue';
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
      {
        path: '/', 
        component: Home,
        props: true,
      },
      {
        path: '/register', 
        component: Registro,
        props: true,
      },
      {        
        path:'/Success/:id',
        component: Success,
        name: 'Success',
        props: true
      },
      {
        path: '*', 
        component: NotFound
      }
    ]
>>>>>>> aee0c7deb65ae80248cc79115cb8058202ca2a04
  })