<template>
  <div>
        <div>
          <div id='app' class='container'>
          <b-table  :striped=true :data='requests' :columns='columns'></b-table>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  beforeMount() {
    axios.get('http://localhost:5000/api/requests')
      .then((response) => {
        this.requests = response.data;
        console.log(this.requests);
      });
  },
  data() {
    return {
      requests: [],
      columns: [
        {
          field: 'customerName',
          label: 'Name',
        },
        {
          field: 'customerPhone',
          label: 'Tel',
        },
        {
          field: 'serviceNeeded',
          label: 'Service Needed',
        },
        {
          field: 'customerEmail',
          label: 'Email',
        },
        {
          field: 'customerZIP',
          label: 'ZIP Code',
          sortable: true,
        },
        {
          field: 'workerContacted',
          label: 'Worker Requested',
          sortable: true,
        },
      ],
    };
  },
};
</script>

<style>

</style>