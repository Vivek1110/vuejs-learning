<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{name}}</p>
        <p>User age: {{age}}</p>
        <button @click='resetName'>Reset Name</button>
         <button @click='resetFunc()'>Reset Name</button>
    </div>
</template>

<script>
import { eventBus  } from "../main";
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        resetFunc: Function,
        age: Number
    },
    data: function() {
        return {

        }
    },
    methods: {
        resetName() {
            this.name = 'Nivya'
            this.$emit('nameReset', this.name);
        }
    },
    created() {
        eventBus.$on('setAge', (data) => {
            console.log("call back data", data);
            this.age = data;
        })
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
