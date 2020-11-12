import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import TestPage from '@/views/TestPage.vue';
import TheOffice from '../views/TheOffice.vue';
import EmployeeTable from '../views/EmployeeTable.vue';

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
  path: '/test',
  name: 'TestPage',
  component: TestPage,
},
{
  path: '/our-workers',
  name: 'TheOffice',
  component: TheOffice,
},
{
  path: '/employee-table',
  name: 'EmployeeTable',
  component: EmployeeTable,
},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
