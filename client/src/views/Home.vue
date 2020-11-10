<template>
  <div class='home'>
    <button is-primary>Login</button>
    <img alt='Vue logo' src='../assets/logo.png' />
    <login-page></login-page>
    <HelloWorld msg='Welcome to Your Vue.js App' />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import LoginPage from '../components/LoginPage.vue';
// import NavBar from '../components/NavBar.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    LoginPage,
    // NavBar,
  },
  data() {
    return {
      isComponentModalActive: false,
    };
  },
};
</script>
