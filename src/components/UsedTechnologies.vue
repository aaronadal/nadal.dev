<script setup lang="ts">
import { computed, type Ref, ref } from 'vue';
import { ALL_TOOLS, TOOL_LABELS, type ToolLabelKey } from '../tools';
import Tool from './Tool.vue';

const labels = TOOL_LABELS;
const tools = Object.values(ALL_TOOLS);

const labelKeys = Object.keys(labels) as ToolLabelKey[];

const hoverLabel = ref(null) as Ref<ToolLabelKey | null>;
const selectedLabel = ref(null) as Ref<ToolLabelKey | null>;

const selectedTools = computed(() => {
  const selection = selectedLabel.value;
  if (!selection) {
    return tools;
  }

  return tools.filter((tool) => tool.labels.indexOf(selection) !== -1);
});

function onLabelSelected(label: ToolLabelKey) {
  if (selectedLabel.value === label) {
    selectedLabel.value = null;
  } else {
    selectedLabel.value = label;
  }

  hoverLabel.value = null;
}
</script>

<template>
  <div class="used-technologies">
    <div class="labels">
      <span
        v-for="key in labelKeys"
        :key="key"
        :class="{ [key]: true, selected: selectedLabel === key }"
        @click="onLabelSelected(key)"
        @mouseenter="hoverLabel = key"
        @mouseleave="hoverLabel = null"
        >{{ labels[key] }}</span
      >
    </div>

    <div class="tools" :class="{ filtered: hoverLabel }">
      <Tool
        v-for="tool in selectedTools"
        :key="tool.key"
        :tool="tool"
        :class="{
          matching: tool.labels.indexOf(selectedLabel || hoverLabel || '') !== -1,
          [`${hoverLabel}`]: tool.labels.indexOf(hoverLabel || '') !== -1,
          [`${selectedLabel}`]: tool.labels.indexOf(selectedLabel || '') !== -1,
        }"
      />
    </div>
  </div>
</template>
