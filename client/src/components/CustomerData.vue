<template>
  <div>
    <br/>
        <p>Please fill out your information and {{ name }} will contact you </p>

    <form action="">
      <div style="margin-top:10px">
        <label>Name</label>
        <input required style="margin-left:5px" type="text" v-model="enteredCustomer.cName"/>
      </div>

      <div style="margin-top:10px">
        <label>Phone Number</label>
        <input required style="margin-left:5px" type="text" v-model="enteredCustomer.phoneNumber"/>
      </div>

      <div style="margin-top:10px">
        <label>Email</label>
        <input required style="margin-left:5px" type="text" v-model="enteredCustomer.email"/>
      </div>

      <div style="margin-top:10px">
        <label>ZIP Code</label>
        <input required style="margin-left:5px" type="text" v-model="enteredCustomer.zip"/>
      </div>

      <div style="margin-top:10px">
        <label for="textBox">Service Needed</label>
        <input required
          id="textBox"
          style="margin-left:5px"
          v-model="enteredCustomer.serviceNeed"/>
      </div>

      <div style="margin-top:7px">
        <b-button size='is-small' type='is-success' @click="submitRequest" >Submit</b-button>
        <b-button size='is-small' type="is-danger"
          @click="clearData"
          style="margin-left:5px" >Clear</b-button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['name'],
  emits: ['toogle-contact'],
  data() {
    return {
      enteredCustomer: {
        cName: '',
        phoneNumber: '',
        email: '',
        zip: '',
        serviceNeed: '',
      },
    };
  },
  methods: {
    clearData() {
      this.enteredCustomer = '';
    },
    submitRequest() {
      const newRequest = {
        workerContacted: this.name,
        customerName: this.enteredCustomer.cName,
        customerEmail: this.enteredCustomer.email,
        customerPhone: this.enteredCustomer.phoneNumber,
        customerZIP: this.enteredCustomer.zip,
        serviceNeeded: this.enteredCustomer.serviceNeed,
      };
      axios.post('http://localhost:5000/api/requests', newRequest)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      this.enteredCustomer = '';
      this.$buefy.dialog.alert({
        title: 'Thank you!',
        message: 'Our representative will contact you soon!',
      });
      this.$router.go(0);
    },
  },
};
</script>

<style>

</style>