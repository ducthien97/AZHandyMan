<template>
  <section>
    <div style='margin-top:10px'>
      <form @submit.prevent='submitData'>
        <div style='margin-top:10px'>
          <label><strong>Name:</strong></label>
          <input style='margin-left:10px' type='text' v-model='enteredName' />
        </div>

        <div style='margin-top:10px'>
          <label for=''><strong>Position:</strong></label>
          <input style='margin-left:10px' type='text' v-model='enteredPosition' />
        </div>

        <div style='margin-top:10px'>
          <label><strong>Tel:</strong></label>
          <input style='margin-left:10px' type='tel' v-model='enteredPhoneNum' />
        </div>

        <div style='margin-top:5px'>
          <label><strong>Email:</strong></label>
          <input style='margin-left:10px ' type='text' v-model='enteredEmail' />
        </div>

        <div style='margin-top:5px'>
          <label><strong>Hourly Charge:</strong></label>
          <input style='margin-left:10px ' type='number' v-model='enteredCharge' />
        </div>

        <button style='margin-top:10px'>Add User</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  beforeMount() {},
  data() {
    return {
      enteredPhoneNum: '',
      enteredEmail: '',
      enteredName: '',
      enteredPosition: '',
      enteredCharge: '',
    };
  },
  // props:['userName', 'phoneNum', 'email' , 'id']

  emits: ['submit-data'],
  methods: {
    submitData() {
      console.log('Calling from inside submitData/UserData.vue');
      this.$emit(
        'submit-data',
        this.enteredName,
        this.enteredPhoneNum,
        this.enteredEmail,
        this.enteredPosition,
        this.enteredCharge,
      );
      this.enteredPhoneNum = '';
      this.enteredEmail = '';
      this.enteredName = '';
      this.enteredPosition = '';
      this.enteredCharge = '';
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
