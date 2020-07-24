<template>
  <v-app>
    <app-header />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import Header from './components/header/Header.vue';

export default {
  name: 'App',

  components: {
    'app-header': Header,
  },
  methods: {
    ...mapActions({
      fetchData: 'loadData',
      fetchSources: 'loadSources',
    }),
  },
  created() {
    this.fetchData('');
    this.fetchSources();
  },
};
</script>
