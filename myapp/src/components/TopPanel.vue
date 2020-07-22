<template>
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