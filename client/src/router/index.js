import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import OurWorkers from '../views/OurWorkers.vue';
import EmployeeTable from '../views/EmployeeTable.vue';
import CustomerRequest from '../views/CustomerRequest.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
},
{
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue'),
},
{
  path: '/our-workers',
  name: 'OurWorkers',
  component: OurWorkers,
},
{
  path: '/employee-table',
  name: 'EmployeeTable',
  component: EmployeeTable,
},
{
  path: '/customer-request',
  name: 'CustomerRequest',
  component: CustomerRequest,
},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
