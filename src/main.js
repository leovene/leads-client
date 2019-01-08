import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './config/routes';


Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
