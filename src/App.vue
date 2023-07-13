<script setup>
import CustomButton from '@/components/CustomButton.vue';

const label = "SFDASFASD";

function handleClickCustom(id) {
  console.log(id);
}
</script>

<template>
  <CustomButton
    :label="label"
    @click="handleClickCustom"
  />
</template>

<style scoped>

body {
  height: 100vh;
  width: 100vw;
}

</style>
