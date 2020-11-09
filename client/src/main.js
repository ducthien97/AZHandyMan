import Vue from 'vue';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
import Buefy from 'buefy';
import Bulma from 'bulma/bulma.sass';
import Multiselect from 'vue-multiselect';
import moment from 'moment';
import VueFlatPickr from 'vue-flatpickr-component';
import '@mdi/font/css/materialdesignicons.css';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// import 'buefy/dist/buefy.css';
import 'vue-multiselect/dist/vue-multiselect.min.css';

Vue.component('multiselect', Multiselect);
Vue.prototype.moment = moment;
Vue.use(Buefy);
Vue.use(Bulma);
Vue.use(VueFlatPickr);
Vue.use(VueApollo);
Vue.config.productionTip = false;
const apolloClient = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex',
  /* headers: {
        token: `${}`,
      }, */
});
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});
new Vue({
  router,
  store,
  render: (h) => h(App),
  apolloProvider,
}).$mount('#app');
