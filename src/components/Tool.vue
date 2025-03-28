<script setup lang="ts">
import type { ToolType } from '../tools';

interface Props {
  tool: ToolType;
  icon?: boolean;
}
withDefaults(defineProps<Props>(), {
  icon: false,
});
</script>

<template>
  <div class="tool" :title="icon ? tool.name : undefined">
    <div class="icon">
      <component :is="tool.component" />
    </div>
    <h3 class="title" v-if="!icon">{{ tool.name }}</h3>
  </div>
</template>
