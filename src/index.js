import Vue from 'vue'
import App from './components/App.vue'
// import Login from './components/Login.vue'
import VueRouter from 'vue-router'

// Vue.use(VueRouter)
Vue.config.productionTip = false

// const router = new VueRouter({
//   mode: 'history',
//   routes: [
//     {
//       path: '/Login',
//       component: Login
//     },
//   ]
// })
new Vue({
  // router,
  el: '#app',
  render: h => h(App)
})
