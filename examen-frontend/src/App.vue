<script setup>
import NavBar from './components/NavBar.vue'
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
    <NavBar />
    <main class="container mt-4">
      <RouterView />
    </main>
  </div>

</template>

<style scoped></style>
