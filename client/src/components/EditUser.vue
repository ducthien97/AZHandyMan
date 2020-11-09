<template>
  <section>
    <div style="margin-top:10px">
      <div style="margin-top:10px">
        <label><strong>Name:</strong></label>
        <input style="margin-left:10px" type="text" v-model="savedObject.userName" />
      </div>

      <div style="margin-top:10px">
        <label for=""><strong>Position:</strong></label>
        <input style="margin-left:10px" type="text" v-model="savedObject.position" />
      </div>

      <div style="margin-top:10px">
        <label><strong>Tel:</strong></label>
        <input style="margin-left:10px" type="text" v-model="savedObject.phoneNum" />
      </div>

      <div style="margin-top:5px">
        <label><strong>Email:</strong></label>
        <input style="margin-left:10px " type="text" v-model="savedObject.email" />
      </div>

      <div style="margin-top:5px">
        <label><strong>PhotoURL:</strong></label>
        <input style="margin-left:10px " type="text" v-model="savedObject.photo" />
      </div>

      <button @click="saveData" style="margin-top:10px">Save User</button>
      <button @click="cancelChange" style="margin-top:10px">Cancel Changes</button>
    </div>
  </section>
</template>

<script>
export default {
  // props:['userName', 'phoneNum', 'position', 'email', 'photo', 'id', 'isEditing'],
  name: 'EditUser',
  props: {
    userNameP: {
      type: String,
      required: true,
    },
    phoneNumP: {
      type: String,
      required: true,
    },
    positionP: {
      type: String,
      required: true,
    },
    emailP: {
      type: String,
      required: false,
    },
    photoP: {},
    idP: {},
    isEditingP: {},
  },
  data() {
    return {
      savedObject: {
        userName: '',
        position: '',
        phoneNum: '',
        email: '',
        photo: '',
        isEditing: '',
      },
    };
  },
  emits: ['save-user', 'cancel-change'],
  beforeMount() {
    console.log('inside mounted method');
    this.savedObject.userName = this.userNameP;
    this.savedObject.position = this.positionP;
    this.savedObject.phoneNum = this.phoneNumP;
    this.savedObject.email = this.emailP;
    this.savedObject.photo = this.photoP;
    this.savedObject.id = this.idP;
    console.log(this.savedObject);
  },
  methods: {
    cancelChange() {
      this.$emit('cancel-change', this.savedObject.id);
    },

    saveData() {
      console.log('Calling from inside saveData/EditUser.vue');
      console.log(this.savedObject);
      this.savedObject.isEditing = false;
      this.$emit('save-user', this.savedObject);
    },
  },
};
</script>
