<template>
  <div>
      <label>Username</label>
      <input type='text' name='userName' v-model='userData.email' id=''>
      <label>Password</label>
      <input v-model='userData.password' type='password'>
      <button @click='submitForm'>Submit</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      on: true,
      errored: false,
      loading: true,
      userData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .post('http://localhost:5000/api/auth', this.userData)
        .then((response) => {
          console.log(response.data.token);
          localStorage.setItem('token', response.data.token);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => {
          this.$router.push('/the-office');
          this.loading = false;
        });
    },
  },
};
</script>

<style>
</style>