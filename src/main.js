import Vue from 'vue'
import Vuex from 'vuex';

import '@babel/polyfill'
import 'mutationobserver-shim'

import firebase from 'firebase/app'
import VueFirestore from 'vue-firestore';
import './firebase.js'
import 'firestore/auth'

import './plugins/bootstrap-vue'
import App from './App.vue'
import router from '@/router';


Vue.config.productionTip = false
Vue.use(Vuex)

Vue.use(VueFirestore, {key: 'id'});      // adding this use statement

const store = new Vuex.Store({
  state:{
    User: null,
    error:null
  },
  mutations:{
    setUser(state, newUser){
      state.userId = newUser;
    },
    setError(state, newError) {
        state.error = newError;
    }
},
  actions: {
    async registerAction(context, datos) {
        try {
            await firebase
            .auth()
            .createUserWithEmailAndPassword(datos.email, datos.password)

            .then(function (response) {
              console.log(response);
              context.commit('setError', null);
              context.commit('setUser', datos.email);
              router.push('/');
            })

            

        }  
        catch (error) {
          console.log(error);
          context.commit('setError', error.message);
          context.commit('setUser',null);
        
        
        }
    }

      
  }
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
