<script setup lang="ts">

</script>

<template>
<!--  <NuxtWelcome/>-->

  <NavigationMainNavigation />
  <main>
    <NuxtPage />
  </main>
  <Footer/>
</template>

<style lang="scss">
main {
  padding-top: 80px;
  background: $base-bg;

  @include media-breakpoint-up(md) {
    background: #f11717;
  }
}
</style>
