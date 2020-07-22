<template>
      <div style="width:100%">
        <v-row>
          <v-col cols="12">
          <v-alert dense dismissible type="info">
            Note: Filter is enabled, diasable it to see all headlines
          </v-alert>
          </v-col>
        </v-row>
      <v-row>
       <v-col cols='8'>
          <v-text-field
            label="Title"
            class="mx-4"
            v-model.lazy='searchTxt'
            outlined
          ></v-text-field>
         
       </v-col>
       <v-col class="cols-4">
         <FilterDialog />
       </v-col>
    </v-row>
    </div>
</template>

<script>
import {  mapActions } from 'vuex';
import FilterDialog from './card/FilterDialog'
export default {
     data() {
      return {
        searchTxt: this.$store.getters.search
      }
    },
    components: {
        FilterDialog
    },
    watch: {
        searchTxt: function(val) {
            this.setSearch(val)
            this.fetchSearchResults(val);
        }
    },
    methods: {
      ...mapActions({
        fetchSearchResults: 'loadData',
        setSearch: 'updateSearch'
      })
    }
}
</script>