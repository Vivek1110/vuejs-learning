<template >
  <v-container>
    <app-snackbar :isVisible='showSnack'/>
    <v-row>
      <app-top-panel />
    </v-row>
    <v-row>
      <v-col cols="12">
          <v-layout v-if='loading'>
                <app-progress />
        </v-layout>
        <v-layout row wrap v-else>
          <v-flex xs12 sm6 lg3 v-for="(article, index) in articles" :key='index'>
              <app-custom-card :article='article' :index='index'/>
          </v-flex>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import CustomCard from './card/CustomCard.vue';
import TopPanel from './header/TopPanel.vue';
import Progress from './utils/Progress.vue';
import SnackBar from './utils/Snackbar.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    'app-custom-card': CustomCard,
    'app-top-panel': TopPanel,
    'app-progress': Progress,
    'app-snackbar': SnackBar,
  },
  computed: {
    ...mapGetters({
      articles: 'articles',
      loading: 'loading',
      showSnack: 'showSnack',
    }),
  },
};
</script>
