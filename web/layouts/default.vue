<script setup lang="ts">

</script>

<template>
<!--  <NuxtWelcome/>-->

  <Header />
  <main>
    <NuxtPage />
  </main>
  <Footer/>
</template>

<style lang="scss">
body {
  background: $base-bg;

  @include media-breakpoint-up(sm) {
    background: #141414;
  }
}
</style>
