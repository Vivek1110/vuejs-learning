<template>
       <v-card
                width="auto"
                height="auto"
                class="ma-3"
                hover
                outlined
              >
                <CardToolTip :index='index'/>
                <v-list-item three-line  class="content">
                  <v-list-item-content>
                    <v-img
                        class="white--text align-end"
                        height="200px"
                        v-bind:src="article['urlToImage'] != null ? article['urlToImage'] : ''"
                        >
                        </v-img>
                    <v-list-item-subtitle>{{article['publishedAt'].substring(0,10)}}</v-list-item-subtitle>
                    <v-list-item-title class="headline mb-1 text-wrap">{{article['title']}}</v-list-item-title>
                    <v-card-text class="text-wrap">{{article['description']}}</v-card-text>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
</template>

<script>
import CardToolTip from './CardToolTip'
export default {
    props:['article', 'index'],
    data() {
        return {

        }
    },
    components: {
        CardToolTip
    }
}
</script>