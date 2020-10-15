import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'




Vue.use(VueRouter)

const routes = [
    {
        path: '/', name:'home',
        component: () => import('./components/YnovMainContainer.vue')
    },
    {
        path: '/home', name:'home',
        component: () => import('./components/YnovMainContainer.vue')
    },
    {
        path: '/teams', name:'teams',
        component: () => import('./components/YnovTeamsList.vue')
    },
    {
        path: '/teams/:teamId', name:'teamsDetails',
        component: () => import('./components/YnovTeamsDetails.vue')
    }

]


const router = new VueRouter({
  routes
})


// Vue.use(Bootstrap);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
