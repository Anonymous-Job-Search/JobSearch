<script setup lang="ts">
import { User } from '@/widgets/header/user';
import { Viewer } from "@/widgets/header/viewer";
const viewer = false
</script>

<template>
  <header>
    <Viewer v-if="viewer" />
    <User v-else />
  </header>
</template>

<style scoped></style>
