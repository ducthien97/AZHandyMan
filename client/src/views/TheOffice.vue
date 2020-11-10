<template>
  <section>
    <div>
      <ActiveUser
        v-for='user in users'
        :key='user.workerID'
        :userName='user.name'
        :phoneNum='user.workerPhoneNumber'
        :id='user.workerID'
        :email='user.workerEmail'
        :photo='user.photoURL'
        :position='user.expertise'
        @delete-user='deleteUser'
        :is-editing ='user.isEditing'
        @editing-user ='editingUser'
        @save-user ='saveUser'
        @cancel-change='cancelChange'
      ></ActiveUser>
      <button @click='toggleNewForm'>Create New User</button>
      <button @click='deleteAllUser'>Delete All User</button>

      <UserData v-show='newUserForm' @submit-data='addUser'></UserData>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import ActiveUser from '../components/ActiveUser.vue';
import UserData from '../components/UserData.vue';
// import thePhoto from '../assets/logo.png';

// import EditUser from '../components/EditUser.vue';
export default {
  name: 'TheOffice',
  watch: {},
  components: {
    ActiveUser,
    UserData,
  },
  updated() {
    console.log('Hello from updated()/TheOffice.vue');
  },
  mounted() {
    axios
      .get('http://localhost:5000/api/workers')
      .then((response) => {
        // response.headers()
        this.users = response.data;
        console.log(this.users);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  data() {
    return {
      newUserForm: false,
      users: null,
      loading: true,
      errored: false,
    };
  },
  methods: {
    toggleNewForm() {
      console.log('Calling from toggle method');
      this.newUserForm = true;
    },
    addUser(enteredName, enteredPhoneNum, email, expertise) {
      const newUser = {
        id: Date.now().toString(),
        workerID: Date.now().toString(),
        name: enteredName,
        workerPhoneNumber: enteredPhoneNum,
        workerEmail: email,
        expertise,
      };
      axios
        .post('http://localhost:5000/api/workers', newUser, {
          headers: {
            'x-auth-token': localStorage.getItem('token'),
          },
        })
        .then((response) => {
          console.log(response);
          console.log(localStorage.getItem('token'));
        })
        .catch((error) => {
          console.log(error);
          console.log(localStorage.getItem('token'));
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    deleteUser(id) {
      console.log('calling from inside deleteUser/App.vue');
      this.users = this.users.filter((user) => user.workerID !== id);
    },
    editingUser(id) {
      console.log('Calling from inside editingUser/App.vue');
      const foundUserIndex = this.users.findIndex((user) => user.workerID === id);
      console.log(foundUserIndex);
      this.users[foundUserIndex].isEditing = true;
    },
    saveUser(savedObject) {
      console.log('Calling from inside saveUser()/App.vue');
      const { id } = savedObject;
      const foundUserIndex = this.users.findIndex((user) => user.id === id);
      const editedUser = savedObject;
      console.log(editedUser);
      this.users = this.users.filter((user) => user.id !== id);
      this.users.splice(foundUserIndex, 0, editedUser);
      console.log(this.users);
    },
    cancelChange(id) {
      const foundUserIndex = this.users.findIndex((user) => user.id === id);
      this.users[foundUserIndex].isEditing = false;
      console.log('Change canceled');
    },
    deleteAllUser() {
      alert('YOU ARE DELETING ALL USERS');
      this.users = [];
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}

section div img {
  width: 100%;
  height: auto;
}
</style>
