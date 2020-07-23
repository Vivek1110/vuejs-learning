<template>
    <v-snackbar
        v-model="snackbar"
        :multi-line="multiLine"
        top
        >
        Note: Filter is enabled, diasable it to see all headlines

        <template v-slot:action="{ attrs }">
            <v-btn
            color="red"
            text
            v-bind="attrs"
            @click="snackbar = false"
            >
            Close
            </v-btn>
        </template>
        </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data: function() {
        return {
            snackbar
        }
    },
    computed: {
    ...mapGetters({
        sources: 'sources',
        search: 'search'
        })
    }
}
</script>