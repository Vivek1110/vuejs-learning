<template >
  <v-container>
 
    <v-row>
      <TopPanel />
    </v-row>
    <v-row>
      <v-col cols='12'>
          <v-layout v-if='loading'>
            <div style="position: absolute; left: 50%; top: 50%">
                <v-progress-circular
                style="position: absolute"
                :size="70"
                :width="7"
                color="purple"
                indeterminate
              ></v-progress-circular>
            </div>
        </v-layout>
        <v-layout row wrap v-else>
          <v-flex xs12 sm6 lg3 v-for="(article, index) in articles" :key='index'>
              <CustomCard :article='article' :index='index'/>
          </v-flex>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CustomCard from './card/CustomCard'
import TopPanel from './TopPanel'
import { mapGetters } from 'vuex';
  export default {
    data() {
      return {
      }
    },
    components: {
        CustomCard,
        TopPanel
    },
    computed: {
        ...mapGetters({
            articles: 'articles',
            loading: 'loading'
        })
    }
  }
</script>
