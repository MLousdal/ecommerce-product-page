<script setup lang="ts">
import { ref, computed } from 'vue'
import TheNavbar from '@/components/TheNavbar.vue'
import IconCart from '@/components/icons/IconCart.vue'
import NumberInput from './components/NumberInput.vue'
import Lightbox from './components/Lightbox.vue'

const product = {
  brand: 'Sneaker Company',
  name: 'Fall Limited Edition Sneakers',
  description:
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  price: 250,
  discount: 50,
  images: [
    { thumbnail: 'image-product-1-thumbnail.jpg', full: 'image-product-1.jpg' },
    { thumbnail: 'image-product-2-thumbnail.jpg', full: 'image-product-2.jpg' },
    { thumbnail: 'image-product-3-thumbnail.jpg', full: 'image-product-3.jpg' },
    { thumbnail: 'image-product-4-thumbnail.jpg', full: 'image-product-4.jpg' }
  ]
}

const computedPrice = computed(() => {
  return product.price - (product.price * product.discount) / 100
})

const count = ref(0)
</script>

<template>
  <TheNavbar />
  <main class="container grid grid-cols-2 gap-24 px-12 mt-24 place-items-center">
    <Lightbox :images="product.images" />
    <div>
      <p class="mb-6 text-xl font-bold text-primary-400">{{ product.brand }}</p>
      <h1 class="mb-12 text-6xl font-bold text-secondary-900">{{ product.name }}</h1>
      <p class="mb-6 text-secondary-700">{{ product.description }}</p>
      <div class="mb-6">
        <p class="flex items-center gap-4 text-3xl font-bold text-secondary-900">
          ${{ computedPrice.toFixed(2) }}
          <span
            class="bg-primary-50 text-primary-400 rounded-lg text-sm px-2 py-0.5"
            v-if="product.discount"
            >{{ product.discount }}%</span
          >
        </p>
        <p class="mt-2 text-xl font-bold line-through text-secondary-400" v-if="product.discount">
          ${{ product.price.toFixed(2) }}
        </p>
      </div>
      <div class="flex gap-4">
        <NumberInput v-model="count" />
        <button
          type="button"
          class="flex items-center justify-center gap-2 p-4 text-white transition-all rounded-lg shadow-2xl bg-primary-400 grow shadow-primary-400 hover:opacity-60"
        >
          <IconCart white /> Add to cart
        </button>
      </div>
    </div>
  </main>
</template>

<style></style>
