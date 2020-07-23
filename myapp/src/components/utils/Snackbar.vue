<template>
    <v-snackbar
        v-model="isVisible"
        top
        >
        Note: Filter is enabled, diasable it to see all headlines

        <template v-slot:action="{ attrs }">
            <v-btn
            color="red"
            text
            v-bind="attrs"
            @click="isVisible = false"
            >
            Close
            </v-btn>
        </template>
        </v-snackbar>
</template>

<script>
export default {
   props: ['isVisible']
}
</script>