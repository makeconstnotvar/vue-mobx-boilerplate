<template>
  <RouterView/>
</template>

<script setup>
import {onMounted} from 'vue'

onMounted(() => {
  console.log(`ram layout`)
})
</script>

<style>

</style>