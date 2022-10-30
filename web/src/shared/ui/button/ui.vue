<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: 'medium',
    validator(value) {
      if (typeof value !== 'string') {
        return false;
      }
      return ['large', 'medium', 'small'].includes(value);
    },
  },
  type: {
    type: String,
    validator(value) {
      if (typeof value !== 'string') {
        return false;
      }
      return ['default', 'primary', 'danger'].includes(value);
    },
  },
});
</script>
<template>
  <div :class="['button', `button-size_${size}`, `button-type_${type}`]">
    <slot></slot>
  </div>
</template>
<style lang="scss">
@import './index';
</style>
