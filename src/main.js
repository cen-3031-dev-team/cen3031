import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import VueRouter from 'vue-router'
import VueLodash from 'vue-lodash'
import Highcharts from 'highcharts'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.use(VueRouter)
Vue.use(VueLodash)
Vue.use(VueAxios, Axios)
Vue.use(Highcharts)

Vue.config.productionTip = false

// Page Components
import LoginComponent from './components/LoginComponent.vue'

// Global Components
import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect)

// Custom Components
import GraphsComponent from './components/GraphsComponent.vue'
import TweetsListComponent from './components/TweetsListComponent.vue'

Vue.component('graph', GraphsComponent)
Vue.component('tweets-list', TweetsListComponent)

const routes = [
    {
        name: 'login',
        path: '/login',
        component: LoginComponent
    },
    {
        name: 'graphs',
        path: '/graphs',
        component: GraphsComponent
    }
]

const router = new VueRouter({ mode: 'history', routes: routes})

new Vue(Vue.util.extend({ router }, App)).$mount('#app')
