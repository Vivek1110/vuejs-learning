<template>
  <v-container>
 
    <v-row>
       <v-col cols='12'>
         <v-btn class='teal white--text'>Filter</v-btn>
       </v-col>
       <v-layout row wrap>
         <v-flex xs12 sm6 lg3 v-for="(article, index) in articles" :key='index'>
            <CustomCard :article='article' :index='index'/>
         </v-flex>
       </v-layout>
    </v-row>
  </v-container>
</template>

<script>
import CustomCard from './card/CustomCard'
import { mapGetters } from 'vuex';
  export default {
    
    components: {
        CustomCard
    },
    computed: {
        ...mapGetters({
            articles: 'articles'
        })
    },
    data: function() {
    return {
      }
    }
  }
</script>
