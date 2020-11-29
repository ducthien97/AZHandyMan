<template>
  <div class='home'>
    <login-page v-if="loginForm" @close-form='closeLoginForm'></login-page>
    <b-button type="is-success" v-if="!loginForm" @click="toggleLoginForm">
      Click to Login (Admin only)</b-button>
    <retired-page v-show="false"></retired-page>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import LoginPage from '../components/PrettyLoginPage.vue';
import RetiredPage from '../components/LoginPageRetired.vue';
// import NavBar from '../components/NavBar.vue';

export default {
  name: 'Home',
  components: {
    LoginPage,
    RetiredPage,
    // NavBar,
  },
  data() {
    return {
      loginForm: false,
    };
  },
  methods: {
    toggleLoginForm() {
      this.loginForm = true;
      console.log(this.loginForm);
    },
    closeLoginForm() {
      this.loginForm = false;
      console.log(this.loginForm);
    },
  },
};
</script>
