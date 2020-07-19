<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" :key='index' @click.native="onDeleteClick(index)">{{quote}}</app-quote>
    </div>
</template>

<script>
import Quote from './Quote'
export default {
    data: function() {
        return {
        }
    },
    props: ['quotes'],
    components: {
        'app-quote': Quote
    },
    methods: {
        onDeleteClick(index) {
            this.$emit('onDelete', index);
        }
    }
}
</script>

<style scoped>

</style>