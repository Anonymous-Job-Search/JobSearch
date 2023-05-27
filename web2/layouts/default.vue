<script setup lang="ts"></script>

<template>
  <!--  <NuxtWelcome/>-->

  <NavigationMainNavigation />
  <main>
    <NuxtPage />
  </main>
  <AppBaseFooter />
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
