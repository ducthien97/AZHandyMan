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
      <b-navbar-item href="/employee-table">
        Employee Table
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a v-if="!isLoggedin" href="/"  class="button is-light">
            Log in
          </a>
          <a v-if="isLoggedin" @click="logOut"  href="/" class="button is-light">
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
    const theToken = localStorage.getItem('x-auth-token');
    console.log(theToken);
    if (theToken === null) {
      this.isLoggedin = false;
    } else {
      this.isLoggedin = true;
    }
  },
  updated() {
    const theToken = localStorage.getItem('x-auth-token');
    console.log(theToken);
    if (theToken === null) {
      this.isLoggedin = false;
    } else {
      this.isLoggedin = true;
    }
  },
  methods: {
    logOut() {
      localStorage.removeItem('x-auth-token');
      this.$buefy.toast.open({ duration: 5000, message: 'Logged out success' });
    },
  },
  data() {
    return {
      isLoggedin: false,
    };
  },
};
</script>
