import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import vReadMoreBox from 'v-read-more-box';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import store from './store/store';
import routes from './route';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.component('v-read-more-box', vReadMoreBox);
const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
