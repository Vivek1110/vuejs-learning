<template>
       <v-card
                width="auto"
                height="auto"
                min-height="400"
                class="ma-3"
                hover
                outlined
              >
                <CardToolTip :index='index'/>
                
                <v-list-item three-line  class="content">
                  <v-list-item-content>
                    <v-img
                        class="white--text align-end"
                        cover
                        width="100%"
                        height="300px"
                        v-bind:src="article['urlToImage'] != null ? article['urlToImage'] : dummyImg"
                        >
                        </v-img>
                    <v-list-item-subtitle class="my-2">{{article['publishedAt'].substring(0,10)}}</v-list-item-subtitle>
                    <v-read-more-box max-height="40">
                    <v-list-item-title  class="text-overline mb-1 text-wrap font-weight-black">{{article['title']}}</v-list-item-title>
                      
                         <button slot="readMore" style="font-size: 12px; float: right; padding: 5px; background-color: teal; color: white; border-radius:5px; margin:11px">Show more..</button>
                         <v-card-text class="text-wrap">{{article['description']}}
                         </v-card-text>
                      </v-read-more-box>
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
          dummyImg: 'https://www.associacaoricoy.com.br/wp-content/plugins/superstorefinder-wp/images/NoImage.png'
        }
    },
    components: {
        CardToolTip
    }
}
</script>

<style scoped>
.hacker{
  width: 200px;
  float: right;
  margin-left: 15px;
}

.readMore .readControl {
  float: left !important;
}
</style>