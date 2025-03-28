<script setup lang="ts">
import { ref, useSlots } from 'vue';

interface Props {
  type: 'job' | 'education';
  start: string;
  end: string;
  role: string;
  company: string;
  logo: string;
  functions?: string[];
}
withDefaults(defineProps<Props>(), {
  functions: () => [],
});

const slots = useSlots();

const showMore = ref(false);
</script>

<template>
  <div class="experience event" :class="type">
    <div class="icon">
      <img :src="logo" />
    </div>
    <div class="date">[{{ start }} - {{ end || 'Present' }}]</div>
    <h3 class="role">{{ role }}</h3>
    <div class="company">@ {{ company }}</div>

    <div v-if="functions.length > 0" class="functions">
      <ul>
        <li v-for="func in functions" :key="func">{{ func }}</li>
      </ul>
    </div>

    <div class="description" v-if="slots.default">
      <div class="content" v-if="showMore">
        <slot />
      </div>

      <a class="show-more" @click="showMore = !showMore">
        {{ showMore ? '- Show less' : '+ Show more' }}
      </a>
    </div>
  </div>
</template>
