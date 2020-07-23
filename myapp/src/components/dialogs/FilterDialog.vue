<template>
    <v-dialog v-model="dialog" scrollable max-width="300px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          primary
          dark
          rounded
          v-bind="attrs"
          v-on="on"
          class="float-right"
          min-width="50px"
        >
          <v-icon>{{icons.mdiFilter}}</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Select News Source</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="card-height">
            <v-checkbox class="ma-0 pa-0" v-for="(source, index) in sources" :key="index" v-model="selected" :label="source" :value="source"></v-checkbox>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="onFilter">Filter</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { mdiFilter } from '@mdi/js'
  export default {
    data () {
      return {
        selected: this.$store.getters.filterSource,
        dialog: false,
        icons: {
          mdiFilter
        }
      }
    },
      computed: {
        ...mapGetters({
            sources: 'sources',
            search: 'search',
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

<style scoped>
.card-height {
  height: "500px";
}

</style>