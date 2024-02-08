<script setup lang="ts">
import { ref } from 'vue'

const pages = ref([
  { name: 'Collections', path: '/' },
  { name: 'Men', path: '/' },
  { name: 'Women', path: '/' },
  { name: 'About', path: '/' },
  { name: 'Contact', path: '/' }
])
</script>

<template>
  <header class="container border-b">
    <div class="flex items-center gap-14">
      <a href="/" class="text-4xl font-bold">sneakers</a>
      <nav>
        <ul class="flex items-center gap-10">
          <li v-for="page in pages" :key="page.name">
            <a
              :href="page.path"
              class="block py-10 border-b-0 border-b-orange-400 hover:border-b-4 hover:pb-9 text-secondary-700"
              >{{ page.name }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
