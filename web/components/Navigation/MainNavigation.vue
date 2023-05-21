<script setup lang="ts"></script>

<template>
  <header class="main-navigation">
    <div class="container">
      <div class="main-navigation-logo">logo</div>
      <nav>
        <ul class="main-navigation__list">
          <li class="main-navigation__list-item">
            <NuxtLink to="/registration"> registration </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.main-navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $grey;
  &__list {
    list-style: none;
  }
}
</style>
