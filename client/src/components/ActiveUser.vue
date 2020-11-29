<template>
  <section>
    <div class='container'>
      <div v-if='!userLocal.isEditing && !isContact'>
        <h2>{{ userName }}</h2>
        <p><strong>Expertise:</strong> {{ position }}</p>
        <p><strong>Phone Number:</strong> {{ phoneNum }}</p>
        <p><strong>Email:</strong> {{ email }}</p>
        <p><strong>Hourly Charge:</strong> ${{ charge }}</p>

      </div>

      <div class='image'>
        <img :src='photo' />
      </div>
      <b-button style="margin-top:10px"
        @click="toogleContact"
        v-if="!isLoggedIn"
        type="is-success">Hire Me</b-button>
      <b-button type="is-success"
        v-show="isLoggedIn" style="margin-top:10px" @click='deleteUser'>Delete User</b-button>
      <b-button
        type="is-success"
        @click='editingUser'
        v-show="isLoggedIn"
        style='margin-left:10px; margin-top:10px'>Edit User</b-button>

      <customer-data
        v-if="!isLoggedIn && isContact"
        :name='userLocal.name'>
      </customer-data>

      <EditUser :idP ='userLocal.id'
        :userNameP='userLocal.name'
        :phoneNumP ='userLocal.workerPhoneNumber'
        :positionP ='userLocal.expertise'
        :emailP='userLocal.workerEmail'
        :photoP='userLocal.photo'
        :objectID='userLocal.objectID'
        :isEditingP ='userLocal.isEditing'
        @save-user ='saveUser'
        @cancel-change ='cancelChange'
        v-if='userLocal.isEditing'></EditUser>
    </div>
  </section>
</template>

<script>
import EditUser from './EditUser.vue';
import CustomerData from './CustomerData.vue';

export default {
  name: 'ActiveUser',
  components: { EditUser, CustomerData },
  props: {
    objectID: {
      type: String,
    },
    userName: {
      type: String,
      required: true,
    },
    phoneNum: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    photo: {},
    id: {},
    isEditing: {
      type: Boolean,
    },
    charge: {},
  },
  updated() {
    console.log('Hello from updated()/Active.vue');
    console.log(this.isEditing);
    //    console.log(this.isEditing);
    //    console.log(this.phoneNum);
  },
  data() {
    return {
      token: localStorage.getItem('x-auth-token'),
      userLocal: {
        name: this.userName,
        id: this.id,
        expertise: this.position,
        workerEmail: this.email,
        workerPhoneNumber: this.phoneNum,
        photo: this.photo,
        isEditing: this.isEditing,
        objectID: this.objectID,
      },
      isContact: false,
    };
  },
  emits: ['delete-user', 'editing-user', 'cancel-change', 'toogle-contact'],
  computed: {
    isLoggedIn() {
      if (this.token === null) {
        return false;
      }
      return true;
    },
  },
  methods: {
    deleteUser() {
      console.log('Calling from deleteUser/ActiveUser.vue');
      console.log(this.id);
      this.$emit('delete-user', this.objectID);
    },
    editingUser() {
      console.log('Calling from editUser/ActiveUser.vue');
      this.userLocal.isEditing = true;
      this.$emit('editing-user', this.id);
    },
    saveUser(savedObject) {
      console.log('Calling from inside saveUser()/ActiveUser');
      this.userLocal = savedObject;
      console.log(this.userLocal);
      this.$emit('save-user', this.userLocal);
    },
    cancelChange(id) {
      console.log(id);
      this.userLocal.isEditing = false;
    },
    toogleContact() {
      console.log(this.isContact);
      this.isContact = !this.isContact;
    },
  },
};
// Task 1:
// Add two components to the app:
// An ActiveUser component and an UserData component
// ActiveUser should output a username (h2) and age (h3)
// UserData should output two input fields => for name and age
// Optional: Add styling of your choice

// Task 2: Output both components side-by-side in your main App template

// Task 3: Add user data and ensure it contains a name and age
// User data should be output in ActiveUser
// It should be updated via the UserData component
</script>
