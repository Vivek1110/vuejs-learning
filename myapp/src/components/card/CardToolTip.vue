<template>
    <div>

       <v-row>
            <v-col cols="12">
                <v-toolbar height="20" flat>
                <v-spacer></v-spacer>
                 <app-update-title-dialog :index='index'/>
                <v-btn @click="moveToDetails" icon>
                    <v-icon>{{ icons.mdiArrowRightBoldCircle }}</v-icon>
                </v-btn>
                </v-toolbar>
            </v-col>
        </v-row>
        </div>
</template>

<script>
import {
  mdiArrowRightBoldCircle,
} from '@mdi/js';
import { mapActions } from 'vuex';
import TitleUpdateDialog from '../dialogs/TitleUpdateDialog.vue';

export default {
  props: ['index'],
  components: {
    'app-update-title-dialog': TitleUpdateDialog,
  },
  data() {
    return {
      icons: {
        mdiArrowRightBoldCircle,
      },
    };
  },
  methods: {
    ...mapActions({
      addHistory: 'addHistory',
    }),
    moveToDetails() {
      this.addHistory(this.index);
      this.$router.push(`details/${this.index}`);
    },
  },
};
</script>
