<template>
    <v-snackbar
        v-model="show"
        top
        >
        Note: Filter is enabled, diasable it to see all headlines

        <template v-slot:action="{ attrs }">
            <v-btn
            color="red"
            text
            v-bind="attrs"
            @click="show = false"
            >
            Close
            </v-btn>
        </template>
        </v-snackbar>
</template>

<script>
import {mapActions} from 'vuex'
export default {
   props: ['isVisible'],
   data() {
       return {
       }
   },
   computed: {
       show: {
           get() {
               return this.isVisible
           },
           set(val) {
               this.setSnackBar(false)
           }
       }
   },
   methods: {
       ...mapActions({
           setSnackBar: 'setSnackBar'
       })
   }
}
</script>