<script setup lang="ts">
import InfinityIcon from './InfinityIcon.vue';

const diff = (new Date().getTime() - new Date('2014-09-14').getTime()) / 1000;
const years = Math.floor(diff / (60 * 60 * 24 * 365.25));
</script>

<template>
  <dl class="experience-bar">
    <dd>{{ years }}+</dd>
    <dt>Years of experience</dt>
    <dd>300+</dd>
    <dt>Features delivered</dt>
    <dd>5M+</dd>
    <dt>Users impacted</dt>
    <dd><InfinityIcon /></dd>
    <dt>Lines <span class="hidden lg:inline">of code</span> in prod</dt>
  </dl>
</template>
