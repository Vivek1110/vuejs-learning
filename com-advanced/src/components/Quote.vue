<template>
    <div>
        <slot name='quote'><p>default Quote Slot</p></slot>
        <slot name='title'></slot>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: auto;
        text-align: center;
    }
    
    h1 {
        color: blue;
    }
</style>