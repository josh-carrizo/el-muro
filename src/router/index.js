
import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';

import Home from '@/components/Home.vue'
import PrincipalConexion from '@/components/PrincipalConexion.vue'
import Registro from '@/components/Registro.vue';
import Success from '@/components/Success.vue';
import NotFound from '@/components/NotFound.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
      {
        path: '/', 
        component: Home,
        props: true,
      },
      {
        path: '/register', 
        component: Registro,
        name:'register'
       
      },
      {        
        path:'/Success',
        component: Success,
        name: 'Success',
        
      },
      {
        path:'/cx',
        component:PrincipalConexion,
        name:'cx',
        
      },
      {
        path: '*', 
        component: NotFound
      }
    ]

  })

  router.beforeEach((to, from, next) => {

    let currentUser = firebase.auth().currentUser;
    
    if (to.meta.requiresAuth && currentUser == null) {
      next('/register')
    } else {
      next()
    }
  })
  
  export default router;

