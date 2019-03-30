import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import VueLodash from 'vue-lodash'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueLodash)
Vue.use(VueAxios, Axios)
Vue.use(VueRouter)

Vue.config.productionTip = false

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';

const routes = [
  {
      name: 'login',
      path: '/login',
      component: HomeComponent
  },
  {
      name: 'create',
      path: '/create',
      component: CreateComponent
  },
  {
      name: 'posts',
      path: '/posts',
      component: IndexComponent
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: EditComponent
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
