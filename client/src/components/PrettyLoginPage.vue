<template>
  <div style="height:500px; width:700px text-align:center">
    <form @submit.prevent="submitForm">
    <div class='modal-card' style='width: auto'>
      <header class='modal-card-head'>
        <p class='modal-card-title'>Login</p>
        <button type='button' class='delete' @click='closeForm'/>
      </header>
      <section class='modal-card-body'>
        <b-field label='Email'>
          <b-input type='text' v-model='userData.email' placeholder='Your email' required>
          </b-input>
        </b-field>

        <b-field label='Password'>
          <b-input
            type='password'
            v-model='userData.password'
            password-reveal
            placeholder='Your password'
            required
          >
          </b-input>
        </b-field>

        <p v-show="errored" style="color:red">{{ message }}</p>

        <b-checkbox>Remember me</b-checkbox>
      </section>
      <footer class='modal-card-foot'>
        <button class='button' type='button' @click='closeForm'>Close</button>
        <button class='button is-primary' @click='submitForm'>Login</button>
      </footer>
    </div>
    </form>
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
      message: '',
      userData: {
        email: '',
        password: '',
      },
    };
  },
  emits: ['close-form'],
  methods: {
    submitForm() {
      axios
        .post('http://localhost:5000/api/auth', this.userData)
        .then((response) => {
          console.log(response.data.token);
          localStorage.setItem('x-auth-token', response.data.token);
          this.$buefy.toast.open({ duration: 5000, message: 'Login success! You can now change worker data' });
          this.$router.go(-1);
          this.$store.commit('inputToken', localStorage.getItem('x-auth-token'));
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
          this.message = error;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    closeForm() {
      this.$emit('close-form');
    },
  },
};
</script>
