<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Login2 />
    
    <router-view />
  </div>
</template>

<script>
import Login2 from './components/Login2.vue'

export default {
  name: 'App',
  components:{
    Login2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
