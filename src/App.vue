<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">
      <router-link class="link-register" v-bind:to="{path: '/'}"><b-icon icon="house-fill" rotate="45" > HOME </b-icon></router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!--<b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>-->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">


        <b-avatar variant="success" icon="people-fill" class="mr-3"></b-avatar>
        <a href="#" v-if="User" >Bienvenido {{ User.displayName }}</a>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#"><router-link class="link-register" v-bind:to="{path: '/register'}">Profile</router-link></b-dropdown-item>
          <b-dropdown-item href="#">
            <a v-if="User" @click.prevent="LogOut" class="btn" href="#" >
                 <b-button variant="outline-info" class="mb-2">
                  <b-icon icon="power" aria-hidden="true"></b-icon> Logout
                </b-button>

            </a>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <router-view />

  </div>
</template>

<script>


export default {
  name: 'App',
  computed: {
    User() {
      return this.$store.state.User;
    }
  },

  methods:{        
      LogOut(){
              this.$store.dispatch('logOut')
          }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

</style>
