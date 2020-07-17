import Vue from 'vue'
import App from './components/App.vue'
import Root from './components/Root'

Vue.component('app-root', Root)

new Vue({
  el: '#app',
  render: h => h(App),
})
