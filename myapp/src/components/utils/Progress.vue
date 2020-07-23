<template>
    <div class="progress">
        <v-progress-circular
        :size="70"
        :width="7"
        color="purple"
        indeterminate
        ></v-progress-circular>
    </div>
</template>

<style scoped>
.progress {
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>