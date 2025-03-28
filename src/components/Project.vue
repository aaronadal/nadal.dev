<script setup lang="ts">
interface Props {
  title: string;
  url?: string;
}
defineProps<Props>();
</script>

<template>
  <div class="project">
    <div class="image">
      <slot name="image" />
    </div>
    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <div class="tools">
        <slot name="tools" />
      </div>
      <div class="description">
        <slot />
      </div>
      <div v-if="url" class="link">
        <a :href="url" target="_blank">View project ↗</a>
      </div>
    </div>
  </div>
</template>
