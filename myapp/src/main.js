import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import { store  } from './store/store'
import VueRouter from 'vue-router';
import { routes } from './route'
import vReadMoreBox from "v-read-more-box";
import VueResource from 'vue-resource';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);


Vue.component("v-read-more-box", vReadMoreBox);
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  vuetify,
  store,
  router: router,
  render: h => h(App)
}).$mount('#app')
