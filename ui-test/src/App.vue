<template>
  <div id="app">
    <!-- App.vue -->

    <v-app>
      <v-app-bar color='teal' app>
        <!-- -->
        <h2>Headline</h2>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-main>
        <v-container fluid>
          <v-row right>
            <v-col cols='12'>
              <v-btn color='teal' style="float: right">Text me</v-btn>
            </v-col>
          </v-row>
            <v-row>
              <v-col cols='3'>
                    <v-card
                      class="mx-auto"
                      max-width="344"
                      outlined
                    >
                      <v-list-item three-line  class="content">
                        <v-list-item-content>
                          <div class="overline mb-4">OVERLINE</div>
                          
                          <v-list-item-subtitle>Date</v-list-item-subtitle>
                          <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                          <v-card-text>Greyhound divisely hello coldly fonwderfully</v-card-text>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
              </v-col>
                   <v-col cols='3'>
                    <v-card
                      class="mx-auto"
                      max-width="344"
                      outlined
                    >
                      <v-list-item three-line  class="content">
                        <v-list-item-content>
                          <div class="overline mb-4">OVERLINE</div>
                          
                          <v-list-item-subtitle>{{articles['publishedAt'].substring(0,10)}}</v-list-item-subtitle>
                          <v-list-item-title class="headline mb-1"><p>{{articles['title']}}</p></v-list-item-title>
                          <v-card-text>Greyhound divisely hello coldly fonwderfully</v-card-text>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
              </v-col>
                   <v-col cols='3'>
                    <v-card
                      class="mx-auto"
                      max-width="344"
                      outlined
                    >
                      <v-list-item three-line  class="content">
                        <v-list-item-content>
                          <div class="overline mb-4">OVERLINE</div>
                          
                          <v-list-item-subtitle>Date</v-list-item-subtitle>
                          <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                          <v-card-text>Greyhound divisely hello coldly fonwderfully</v-card-text>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
              </v-col>
                   <v-col cols='3'>
                    <v-card
                      class="mx-auto"
                      max-width="344"
                      outlined
                    >
                      <v-list-item three-line  class="content">
                        <v-list-item-content>
                          <div class="overline mb-4">OVERLINE</div>
                          
                          <v-list-item-subtitle>Date</v-list-item-subtitle>
                          <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                          <v-card-text>Greyhound divisely hello coldly fonwderfully</v-card-text>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
              </v-col>
          </v-row>
 
        </v-container>
      </v-main>

      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      articles: {
            "source": {
                "id": null,
                "name": "Daily Beast"
            },
            "author": "Marlow Stern",
            "title": "John Oliver Believes the Royal Family Killed Princess Diana - The Daily Beast",
            "description": "During an informative and entertaining segment on conspiracy theories, the “Last Week Tonight” host shared one of his own.",
            "url": "https://www.thedailybeast.com/john-oliver-believes-the-royal-family-killed-princess-diana",
            "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_805,w_1432,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1595217648/Screen_Shot_2020-07-19_at_11.37.00_PM_z6hm5m",
            "publishedAt": "2020-07-20T04:38:00Z",
            "content": "After several weeks away from the steaming pile of shit that is the news these days, John Oliver returned to Last Week Tonightto recap our present hellscape. \r\nFirst, he aired a short segment focusin… [+2234 chars]"
        }
    }
  }
}
</script>

<style >
.content{
      background: rgba(0,0,0,0.4);
      color: white;
      height: inherit;
      padding-left: 10px;
    }

</style>
