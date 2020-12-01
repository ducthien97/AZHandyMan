<template>
  <div>
    <div id='app' class='container'>
      <b-table  :striped=true :data='pulledData' :columns='columns'></b-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    axios.get('http://localhost:5000/api/workers')
      .then((res) => {
        this.pulledData = res.data;
        console.log(this.pulledData);
        console.log(this.$store.state.authToken);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      pulledData: [],
      columns: [
        {
          field: 'workerID',
          label: 'ID',
          width: '40',
          numeric: false,
        },
        {
          field: 'name',
          label: 'Name',
          searchable: true,
        },
        {
          field: 'expertise',
          label: 'Title',
        },
        {
          field: 'workerEmail',
          label: 'Email',
        },
        {
          field: 'hourlyCharge',
          label: 'Hourly Charge (in $)',
          sortable: true,
        },
      ],
    };
  },
};
</script>

<style></style>
