<template>
      <v-row align="center" style="height:60px">
       <v-col cols="6">
         <v-text-field
            label="Type to search.."
            class="mx-4"
            v-model='searchTxt'
            :append-icon="icons.mdiSearchWeb"
            outlined
          ></v-text-field>
       </v-col>
        <v-col cols="6" class="mb-auto">
          <div>
            <app-filter-dialog />
            <app-history-dialog />
         </div>
       </v-col>
    </v-row>
</template>

<script>
import { mdiSearchWeb } from '@mdi/js';
import { mapActions } from 'vuex';
import FilterDialog from '../dialogs/FilterDialog.vue';
import HistoryDialog from '../dialogs/HistoryDialog.vue';

export default {
  data() {
    return {
      searchTxt: this.$store.getters.search,
      icons: {
        mdiSearchWeb,
      },
    };
  },
  components: {
    'app-filter-dialog': FilterDialog,
    'app-history-dialog': HistoryDialog,
  },
  watch: {
    searchTxt(val) {
      this.setSearch(val);
      this.fetchSearchResults(val);
    },
  },
  methods: {
    ...mapActions({
      fetchSearchResults: 'loadData',
      setSearch: 'updateSearch',
    }),
  },
};
</script>
