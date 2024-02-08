<script setup lang="ts">
const model = defineModel<number>({ required: true })
import IconMinus from '@/components/icons/IconMinus.vue'
import IconPlus from '@/components/icons/IconPlus.vue'

function decrement() {
  if (model.value < 1) return
  model.value--
}

function increment() {
  model.value++
}
</script>

<template>
  <div class="relative flex items-center max-w-[10rem]">
    <button
      type="button"
      id="decrement-button"
      @click="decrement"
      data-input-counter-decrement="quantity-input"
      class="p-3 h-14 bg-secondary-50 rounded-s-lg focus:outline-none group"
    >
      <IconMinus class="transition-opacity group-hover:opacity-50 group-focus:opacity-50" />
    </button>
    <input
      type="text"
      id="quantity-input"
      data-input-counter
      aria-describedby="helper-text-explanation"
      class="bg-secondary-50 h-14 text-center text-secondary-900 text-sm block w-full p-2.5 font-bold focus:outline-none"
      placeholder="0"
      required
      v-model="model"
    />
    <button
      type="button"
      id="increment-button"
      @click="increment"
      data-input-counter-increment="quantity-input"
      class="p-3 h-14 bg-secondary-50 rounded-e-lg focus:outline-none group"
    >
      <IconPlus class="transition-opacity group-hover:opacity-50 group-focus:opacity-50" />
    </button>
  </div>
</template>
