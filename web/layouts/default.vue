<script setup lang="ts"></script>

<template>
  <div>
    <NavigationMainNavigation />
    <main>
      <NuxtPage />
    </main>
    <BaseFooter />
  </div>
</template>

<style lang="scss">
main {
  padding-top: 80px;
  background: $base-bg;

  @include media-breakpoint-up(md) {
    background: $grey-dark;
  }
}
</style>
