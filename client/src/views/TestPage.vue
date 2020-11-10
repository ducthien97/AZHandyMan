<template>
  <div class='about'>
    <h1>This is a Test Page</h1>
    <div class='columns is-multiline is-mobile'>
      <div class='column is-half'>
        <div class='field'>
          <div class='control'>
            <input
              v-model='testName'
              class='input is-highlight-blue' type='text' placeholder='Primary input'
            >
          </div>
        </div>
      </div>
      <div class='column is-half'>
        <div class='field'>
          <div class='control'>
            <input
              v-model='testName2'
              class='input is-success' type='text' placeholder='Success input'>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Test Page',
  components: {
  },
  data() {
    return {
      testName: 'Test Name',
      testName2: 'Another Name',
    };
  },
  methods: {},
};
</script>
