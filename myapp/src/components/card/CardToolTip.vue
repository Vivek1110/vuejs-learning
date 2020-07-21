<template>
    <div>
      
       <v-row>
            <v-col cols='12'>
                <v-toolbar height="20" flat>
                <v-spacer></v-spacer>
                 <Dialog :index='index'/>
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
                mdiArrowRightBoldCircle,
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