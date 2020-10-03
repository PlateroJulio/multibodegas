<template>
  <div id="app" >
        <div id="nav">
            <router-link v-if="authenticated" to="/menu" ></router-link>
        </div>
        <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
import Login from '@/views/Login.vue'
export default {
  name: 'App',
  components: {
    Login
  },
  data() {
      return {
      authenticated: false,
      session: sessionStorage.getItem('autenticado') || null

      }
  },
  mounted() {
      if(!this.authenticated) {
        if (this.session == null) {
            this.$router.replace({ name: "Login" });
        }
           
      }
  },
   methods: {
      setAuthenticated(status) {
          this.authenticated = status;
      }
  }       
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: white;
    }
  }
}

*{
  margin: 0px;
  padding:0px;
}


</style>
