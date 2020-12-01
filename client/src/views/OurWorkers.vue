<template>
    <div>
      <h2 style="font-size:2rem">Our Team</h2>
      <ActiveUser
        v-for='user in users'
        :key='user.workerID'
        :userName='user.name'
        :phoneNum='user.workerPhoneNumber'
        :id='user.workerID'
        :objectID='user._id'
        :email='user.workerEmail'
        :photo='user.photo'
        :position='user.expertise'
        :charge='user.hourlyCharge'
        @delete-user='deleteUser'
        :is-editing ='user.isEditing'
        @editing-user ='editingUser'
        @save-user ='saveUser'
        @cancel-change='cancelChange'
      ></ActiveUser>
      <b-button v-show="isLoggedIn"
        type="is-success"
        @click='toggleNewForm'>Create New User</b-button>
      <UserData v-show='newUserForm' @submit-data='addUser'></UserData>
    </div>
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
  beforeMount() {
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
      token: localStorage.getItem('x-auth-token'),
      loading: true,
      errored: false,
    };
  },
  computed: {
    isLoggedIn() {
      if (this.token === null) {
        return false;
      }
      return true;
    },
  },
  methods: {
    toggleNewForm() {
      console.log('Calling from toggle method');
      this.newUserForm = true;
    },
    addUser(enteredName, enteredPhoneNum, email, expertise, hourlyCharge) {
      let i = 0;
      for (i = 0; i < 1; i += 1) {
        const newUser = {
          id: Date.now().toString(),
          workerID: Date.now().toString(),
          name: enteredName,
          workerPhoneNumber: enteredPhoneNum,
          workerEmail: email,
          expertise,
          hourlyCharge,
        };
        axios
          .post('http://localhost:5000/api/workers', newUser, {
            headers: {
              'x-auth-token': localStorage.getItem('x-auth-token'),
            },
          })
          .then((response) => {
            console.log(response);
            console.log(localStorage.getItem('token'));
            this.users.push(response.data);
          })
          .catch((error) => {
            console.log(error);
            console.log(localStorage.getItem('token'));
            alert(error);
            this.errored = true;
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    deleteUser(id) {
      console.log('calling from inside deleteUser/App.vue');
      console.log(id);
      const link = `http://localhost:5000/api/workers/${id}`;
      axios
        .delete(link, {
          headers: {
            'x-auth-token': localStorage.getItem('x-auth-token'),
          },
        })
        .then((response) => {
          this.users.splice(id, 1);
          console.log(response);
          console.log(this.users);
        })
        .catch((error) => {
          console.log(localStorage.getItem('x-auth-token'));
          console.log(error);
          alert(error);
        });
    },
    editingUser(id) {
      console.log('Calling from inside editingUser/App.vue');
      const foundUserIndex = this.users.findIndex((user) => user.workerID === id);
      console.log(foundUserIndex);
      this.users[foundUserIndex].isEditing = true;
    },
    saveUser(savedObject) {
      console.log('Calling from inside saveUser()/App.vue');
      console.log(savedObject);
      const { objectID } = savedObject;
      console.log(objectID);
      axios
        .put(`http://localhost:5000/api/workers/${objectID}`, savedObject)
        .then((r) => {
          console.log(savedObject);
          const foundUserIndex = this.users.findIndex(
            (user) => user._id === savedObject.objectID,
          );
          console.log(foundUserIndex);
          this.users[foundUserIndex].isEditing = false;
          console.log(r);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    cancelChange(id) {
      const foundUserIndex = this.users.findIndex((user) => user.id === id);
      this.users[foundUserIndex].isEditing = false;
      console.log('Change canceled');
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
  max-width: 60rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}

section .image {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}
</style>
