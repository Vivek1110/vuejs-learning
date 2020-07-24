<template>
    <v-dialog v-model="dialog" scrollable max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          primary
          dark
          rounded
          v-bind="attrs"
          v-on="on"
          class="float-right mr-2"
          min-width="50px"
        >
          <v-icon>
            {{icons.mdiHistory}}
          </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-list three-line v-if="history.length != 0">
        <template v-for="(item, index) in history" >
                  <v-list-item
                  :key="index"
                  >
                  <v-list-item-avatar>
                      <v-img :src="item.urlToImage"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                      <v-list-item-title class="text-wrap">{{item.title}}</v-list-item-title>
                      <v-list-item-subtitle>Vistied at: {{item.visitedTime}}</v-list-item-subtitle>
                  </v-list-item-content>
                  </v-list-item>
              </template>
            </v-list>
             <v-list-item three-line v-else>
          <v-list-item-content>
            <div class="overline mb-4">Oops!!</div>
            <v-list-item-title class="headline mb-1">No History Available.</v-list-item-title>
            <v-list-item-subtitle>
              Please browse through news to view history here.
              </v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
            <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="clearHistory">Clear History</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { mdiHistory } from '@mdi/js';

export default {
  data() {
    return {
      dialog: false,
      icons: {
        mdiHistory,
      },
    };
  },
  computed: {
    ...mapGetters({
      history: 'history',
    }),
  },
  methods: {
    ...mapActions({
      clearHistory: 'clearHistory',
    }),
  },
};
</script>

<style scoped>
</style>
