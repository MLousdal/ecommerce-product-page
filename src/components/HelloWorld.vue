<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-8">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <h1 class="text-8xl font-bold">{{ msg }}</h1>
    <p class="text-xl">
      You've successfully created a project with
      <a
        href="https://vitejs.dev/"
        target="_blank"
        rel="noopener"
        class="font-medium text-lime-600 underline hover:no-underline"
        >Vite</a
      >
      +
      <a
        href="https://vuejs.org/"
        target="_blank"
        rel="noopener"
        class="font-medium text-lime-600 underline hover:no-underline"
        >Vue 3</a
      >.
    </p>
  </div>
</template>
