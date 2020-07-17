<template>
    <div>
        <h1>Home Vue Status = {{status}}</h1>
        <hr>
        <button @click="changeStatus">Change Status</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return{
            status: 'Normal'
        }
    },
    methods: {
        changeStatus() {
            this.status = 'Super Critical'
        }
    }
}
</script>