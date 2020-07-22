<template>
  <v-row justify="end">
    <v-dialog v-model="dialog" scrollable max-width="300px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="teal"
          dark
          v-bind="attrs"
          v-on="on"
          class="float-right"
        >
          Filter
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Select Country</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 500px;">
            <v-checkbox v-for="(source, index) in sources" :key="index" v-model="selected" :label="source" :value="source"></v-checkbox>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="onFilter">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
  export default {
    data () {
      return {
        selected: [],
        dialog: false,
      }
    },
      computed: {
        ...mapGetters({
            sources: 'sources',
            search: 'search'
        })
    },
    methods: {
      ...mapActions({
        fliterArticle: 'fliterArticle',
        fetchData: 'loadData',
      }),
      onFilter: function() {
        if(this.selected.length == 0) {
          this.fetchData(this.search)
        }
        this.fliterArticle(this.selected)
        this.dialog= false;
      }
    }
  }
</script>