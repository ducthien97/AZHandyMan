<template>
  <section>
    <div class='container'>
      <div v-if='!isEditing'>
        <h2>{{ userName }}</h2>
        <p><strong>Position:</strong> {{ position }}</p>
        <p><strong>Phone Number:</strong> {{ phoneNum }}</p>
        <p><strong>Email:</strong> {{ email }}</p>
        <p> {{ isEditing }} </p>
      </div>

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
      v-if='isEditing'></EditUser>
      <div class='image'>
        <img :src='photo' />
      </div>
      <button @click='deleteUser'>Delete User</button>
      <button @click='editingUser' style='margin-left:10px'>Edit User</button>
    </div>
  </section>
</template>

<script>
import EditUser from './EditUser.vue';

export default {
  name: 'ActiveUser',
  components: { EditUser },
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
  },
  updated() {
    console.log('Hello from updated()/Active.vue');
    console.log(this.isEditing);
    //    console.log(this.isEditing);
    //    console.log(this.phoneNum);
  },
  data() {
    return {
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
    };
  },
  emits: ['delete-user', 'editing-user', 'cancel-change'],
  methods: {
    deleteUser() {
      console.log('Calling from deleteUser/ActiveUser.vue');
      console.log(this.id);
      this.$emit('delete-user', this.objectID);
    },
    editingUser() {
      console.log('Calling from editUser/ActiveUser.vue');
      this.$emit('editing-user', this.id);
    },
    saveUser(savedObject) {
      console.log('Calling from inside saveUser()/ActiveUser');
      this.userLocal = savedObject;
      console.log(this.userLocal);
      this.$emit('save-user', this.userLocal);
    },
    cancelChange(id) {
      this.$emit('cancel-change', id);
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
