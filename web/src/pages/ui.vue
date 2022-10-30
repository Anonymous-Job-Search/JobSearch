<script setup lang="ts">
import { RouterView } from 'vue-router';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
</script>

<template>
  <Header />

  <main>
    <RouterView />
  </main>

  <Footer />
</template>
