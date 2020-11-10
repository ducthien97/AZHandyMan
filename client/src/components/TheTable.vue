<template>
    <div>
        <b-table
            :data="members"
            :bordered="isBordered"
            :striped="isStriped"
            :paginated="isPaginated"
            :pagination-position="paginationPosition"
            :per-page="perPage"
            :narrowed="isNarrowed">
            <template slot-scope="props">
              <b-table-column label="ID" field="leadId">
                {{ props.row.leadId }}
              </b-table-column>
              <b-table-column label="PEO ID" field="peoId" sortable searchable>
                {{ props.row.peoId }}
              </b-table-column>
              <b-table-column label="First Name" field="firstName" sortable searchable>
                {{ props.row.firstName }}
              </b-table-column>
              <b-table-column label="Last Name" field="lastName" sortable searchable>
                {{ props.row.lastName }}
              </b-table-column>
            </template>
        </b-table>
    </div>
</template>
<script>
import MockData from '../assets/models/mockData.json';

export default {
  data() {
    return {
      members: MockData,
      isBordered: true,
      isStriped: true,
      isPaginated: true,
      paginationPosition: 'top',
      perPage: 5,
      isNarrowed: false,
    };
  },
};
</script>