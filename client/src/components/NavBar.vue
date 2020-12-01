<template>
  <b-navbar fixed-top type="is-primary">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/71cSs6FtaIL._AC_SL1500_.jpg"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="/">
        Home
      </b-navbar-item>
      <b-navbar-item href="/about">
        About
      </b-navbar-item>
      <b-navbar-item href="/our-workers">
        Our Workers
      </b-navbar-item>
      <b-navbar-item v-if="isLogin" href="/employee-table">
        Employee Table
      </b-navbar-item>
      <b-navbar-item v-if="isLogin" href="/customer-request">
        Customer Request
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <p v-if="isLogin" style="margin-right:7px">Currently in Admin Mode</p>
        <p v-else style="margin-right:7px">Currently in Customer Mode</p>
        <div class="buttons">
          <a v-if="!isLogin" href="/"  class="button is-light">
            Log in
          </a>
          <a v-if="isLogin" @click="logOut"  href="/" class="button is-light">
            Log out
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  mounted() {
    // console.log(this.$store.getters.getToken);
    // console.log(this.$store.state.authToken);
  },
  methods: {
    logOut() {
      localStorage.removeItem('x-auth-token');
      this.$store.commit('removeToken');
      this.$buefy.toast.open({ duration: 5000, message: 'Logged out success' });
    },
  },
  data() {
    return {
      isLoggedin: false,
    };
  },
  computed: {
    isLogin() {
      return (localStorage.getItem('x-auth-token') !== null);
    },
  },
};
</script>
