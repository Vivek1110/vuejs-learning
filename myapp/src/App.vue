<template>
  <v-app dark>
    <app-header />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/header/Header'
import {mapActions} from 'vuex';

export default {
  name: 'App',

  components: {
    'app-header': Header
  },
  methods: {
    ...mapActions({
      fetchData: 'loadData',
      fetchSources: 'loadSources'
    })
  },
  created: function() {
    this.fetchData('');
    this.fetchSources();
  }
};
</script>
