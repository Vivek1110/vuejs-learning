<template>
    <div>
        <app-server-status v-for="i in 5" v-bind:key="i"></app-server-status>
    </div>
</template>

<script>
import ServerStatus from './ServerStatus'
export default {
    components: {
        'app-server-status': ServerStatus
    }
}
</script>