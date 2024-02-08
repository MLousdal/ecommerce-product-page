<script setup lang="ts">
import { ref } from 'vue'
import type { IImage } from '@/models/models'

defineProps<{
  images?: IImage[]
}>()

const currentImageIndex = ref(0)

function setCurrentImage(index: number) {
  currentImageIndex.value = index
}
</script>

<template>
  <div class="flex flex-col w-full h-full gap-6">
    <template v-if="images && images.length">
      <img :src="'./assets/images/' + images[currentImageIndex].full" alt="" class="rounded-xl" />
      <div class="grid grid-cols-4 gap-6">
        <img
          :src="'./assets/images/' + image.thumbnail"
          v-for="(image, index) in images"
          :key="index"
          class="rounded-lg"
          @click="setCurrentImage(index)"
        />
      </div>
    </template>
  </div>
</template>
