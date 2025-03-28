<script setup lang="ts">
import Experience from './Experience.vue';
import UjiLogo from '../assets/uji.png';
import UocLogo from '../assets/uoc.png';
</script>

<template>
  <div class="education timeline">
    <Experience
      type="education"
      start="2010"
      end="2014"
      role="Bachelor’s Degree in Computer Engineering"
      company="Universitat Jaume I (Castellón, Spain)"
      :logo="UjiLogo"
    />

    <Experience
      type="education"
      start="2016"
      end="2021"
      role="Bachelor's Degree in Design and Digital Creation"
      company="Universitat Oberta de Catalunya (Barcelona, Spain)"
      :logo="UocLogo"
    />
  </div>
</template>
