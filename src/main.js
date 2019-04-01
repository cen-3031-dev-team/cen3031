import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import VueRouter from 'vue-router'
import VueLodash from 'vue-lodash'
import Highcharts from 'highcharts'
import 'bootstrap/dist/css/bootstrap.min.css'

// Vue Router
Vue.use(VueRouter)
Vue.use(VueLodash)
Vue.use(VueAxios, Axios)
Vue.use(Highcharts)

import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect)

Vue.config.productionTip = false

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';
import GraphsComponent from './components/GraphsComponent.vue';

Vue.component('graph', GraphsComponent)

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
  },
  {
      name: 'graphs',
      path: 'graphs',
      component: GraphsComponent
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
