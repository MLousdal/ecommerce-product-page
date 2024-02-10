<script setup lang="ts">
import type { IImage } from '@/models/models'

defineProps<{
  image?: IImage
  active: boolean
}>()
</script>

<template>
  <button
    type="button"
    :class="[
      {
        'border-4 border-primary-400 after:opacity-50': active
      },
      'rounded-lg overflow-hidden relative after:absolute after:inset-0 after:bg-white after:opacity-0 hover:after:opacity-25 focus:after:opacity-25 after:transition-opacity after:duration-300 after:z-10 focus:outline-none'
    ]"
  >
    <img :src="'./assets/images/' + image?.thumbnail" class="w-full"/>
  </button>
</template>
