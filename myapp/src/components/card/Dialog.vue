<template>
  <v-row justify="end">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on, attrs }">
         <v-btn  v-bind="attrs"
                v-on="on" 
                icon>
            <v-icon>{{ icons.mdiPencilCircle }}</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Enter new title text</v-card-title>
        <div>
            <v-text-field
            label="Title"
            class="mx-4"
            v-model="title"
            outlined
          ></v-text-field>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>
          <v-btn color="green darken-1" text @click="titleUpdate">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mdiPencilCircle } from '@mdi/js'
import {mapActions} from 'vuex';
  export default {
    props: ['index'],
    data () {
      return {
          dialog: false,
           icons: {
                mdiPencilCircle
            },
            title: ''
      }
    },
    methods: {
        ...mapActions({
            updateTitleAction : 'updateTitleAction'
        }),
        titleUpdate: function() {
            this.updateTitleAction({index: this.index, title: this.title});
            this.dialog = false;
        }
    }
  }
</script>