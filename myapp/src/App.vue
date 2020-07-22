<template>
  <v-app>
    <Header />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header'
import {mapActions} from 'vuex';

export default {
  name: 'App',

  components: {
    Header
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
  },

  data: () => ({
    //
  }),
};
</script>
