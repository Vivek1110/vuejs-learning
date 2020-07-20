<template>
    <div>
      
       <v-row>
            <v-col cols='12'>
                <v-toolbar height="30" flat>
                <v-spacer></v-spacer>
                 <Dialog :index='index'/>
                <v-btn @click="moveToDetails" icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-toolbar>
            </v-col>
        </v-row>
        </div>
</template>

<script>
import {
    mdiAccount,
    mdiPencil,
    mdiShareVariant,
    mdiDelete,
  } from '@mdi/js'
  import Dialog from './Dialog'
export default {
    props:['index'],
    components: {
        Dialog
    },
    data() {
        return {
        icons: {
                mdiAccount,
                mdiPencil,
                mdiShareVariant,
                mdiDelete,
            }
        }
    },
    methods: {
        moveToDetails: function(){
            this.$router.push(`details/${this.index}`)
        }
    }
}
</script>