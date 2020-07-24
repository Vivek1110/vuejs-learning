<template>
    <v-container>
        <v-row class="grey lighten-5">
            <v-col cols='12'>
              <v-img
                class="white--text align-end"
                height="400"
                width="auto"
                contain
                v-bind:src="articles[index]['urlToImage']!= null?articles[index]['urlToImage']:''"
                >

                </v-img>
                <div class="subheading">
                  Author: {{articles[index]['author'] != null ? articles[index]['author'] : 'N/A'}}

                </div>
            </v-col>

        </v-row>
        <v-row class="grey lighten-5">
            <v-col cols='12'>
                <h1>{{articles[index]['title']}}</h1>
                   <v-divider
                        class="mx-4"
                    ></v-divider>
                <h3 class="ml-4">{{articles[index]['description']}}</h3>
            </v-col>

        </v-row>
        <v-row></v-row>
        <v-row>
            <p>{{articles[index]['content']!= null?articles[index]['content'].slice(0,-15) : ''}}
              <a :href="articles[index]['url']" target="_blank">continue reading..</a>
              </p>
        </v-row>
    </v-container>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      dummyImg: 'https://www.associacaoricoy.com.br/wp-content/plugins/superstorefinder-wp/images/NoImage.png',
      index: this.$route.params.id,
    };
  },
  computed: {
    ...mapGetters({
      articles: 'articles',
    }),
  },
};
</script>
