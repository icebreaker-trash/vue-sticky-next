<script setup lang="ts">

</script>

<template>
  <div class="container mx-auto pt-10">
    <div sticky-container class="border-2 h-[200vh] relative">

      <div v-sticky="{ offset: { top: 0 } }" class="h-[100px] w-[100px] bg-red-300"></div>
    </div>
  </div>
</template>

<style scoped></style>
