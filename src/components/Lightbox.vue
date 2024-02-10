<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import type { IImage } from '@/models/models'
import LightboxThumbnail from '@/components/LightboxThumbnail.vue'
import IconClose from './icons/IconClose.vue'
import IconPrevious from './icons/IconPrevious.vue'
import IconNext from './icons/IconNext.vue'

const props = defineProps<{
  images?: IImage[]
}>()

const currentImageIndex = ref(0)
const isOpen = ref(false)

function setCurrentImage(index: number) {
  currentImageIndex.value = index
}

function rotateImageIndex(direction: number) {
  currentImageIndex.value = currentImageIndex.value + direction

  if (currentImageIndex.value < 0) {
    currentImageIndex.value = props.images!.length - 1
  } else if (currentImageIndex.value >= props.images!.length) {
    currentImageIndex.value = 0
  }
}

addEventListener('keydown', (event) => {
  if (isOpen.value) {
    if (event.key === 'ArrowLeft') {
      rotateImageIndex(-1)
    } else if (event.key === 'ArrowRight') {
      rotateImageIndex(1)
    } else if (event.key === 'Escape') {
      isOpen.value = false
    }
  }
})

onBeforeUnmount(() => {
  removeEventListener('keydown', () => {})
})
</script>

<template>
  <div class="flex flex-col w-full h-full gap-6">
    <template v-if="images && images.length">
      <button type="button" @click="isOpen = !isOpen" class="focus:outline-none">
        <img :src="'./assets/images/' + images[currentImageIndex].full" alt="" class="rounded-xl" />
      </button>
      <div class="grid grid-cols-4 gap-6">
        <LightboxThumbnail
          @click="setCurrentImage(index)"
          v-for="(image, index) in images"
          :key="index"
          :image="image"
          :active="currentImageIndex === index"
        />
      </div>
    </template>
  </div>
  <div
    v-if="images && images.length && isOpen"
    class="fixed inset-0 z-20 flex justify-center items-center flex-col gap-6"
  >
    <div
      class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20"
    ></div>
    <div class="relative z-30 max-w-screen-sm">
      <button
        type="button"
        @click="isOpen = false"
        class="-top-6 -right-6 absolute group focus:outline-none"
      >
        <IconClose
          class="fill-white group-hover:fill-primary-400 group-focus:fill-primary-400 transition-all"
        />
      </button>
      <img
        :src="'./assets/images/' + images[currentImageIndex].full"
        alt=""
        class="rounded-xl"
      />
      <button
        type="button"
        @click="rotateImageIndex(-1)"
        class="top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 absolute p-4 bg-white rounded-full group focus:outline-none"
      >
        <IconPrevious
          class="stroke-secondary-900 group-hover:stroke-primary-400 group-focus:stroke-primary-400 transition-all"
        />
      </button>
      <button
        type="button"
        @click="rotateImageIndex(1)"
        class="top-1/2 right-0 translate-x-1/2 -translate-y-1/2 absolute p-4 bg-white rounded-full group focus:outline-none"
      >
        <IconNext
          class="stroke-secondary-900 group-hover:stroke-primary-400 group-focus:stroke-primary-400 transition-all"
        />
      </button>
    </div>
    <div class="grid grid-cols-4 gap-6">
      <LightboxThumbnail
        v-for="(image, index) in images"
        :key="index"
        :image="image"
        :active="currentImageIndex === index"
        @click="setCurrentImage(index)"
        class="z-30 max-w-24"
      />
    </div>
  </div>
</template>
