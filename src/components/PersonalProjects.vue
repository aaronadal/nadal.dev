<script setup lang="ts">
import { ALL_TOOLS } from '../tools';
import Project from './Project.vue';
import CebrasDePaso from './projects/CebrasDePaso.vue';
import WeNeedMoreWomenDirectors from './projects/WeNeedMoreWomenDirectors.vue';
import Tool from './Tool.vue';
</script>

<template>
  <div class="personal-projects">
    <Project title="Cebras de paso" url="https://cebrasdepaso.es">
      <template #image>
        <CebrasDePaso />
      </template>
      <p>
        A podcast project featuring conversations about life, covering topics like personal growth,
        society, and culture.
      </p>
      <p>
        Developed using modern web technologies, it provides a smooth and responsive user experience
        for streaming episodes and exploring related content.
      </p>
      <template #tools>
        <Tool icon :tool="ALL_TOOLS.typescript" />
        <Tool icon :tool="ALL_TOOLS.vue" />
        <Tool icon :tool="ALL_TOOLS.nuxt" />
        <Tool icon :tool="ALL_TOOLS.vite" />
        <Tool icon :tool="ALL_TOOLS.github" />
        <Tool icon :tool="ALL_TOOLS.vercel" />
      </template>
    </Project>
    <Project title="We need more women directors" url="https://oscars.nadal.dev">
      <template #image>
        <WeNeedMoreWomenDirectors />
      </template>
      <p>
        A data visualization project exploring gender inequality in the film industry, specifically
        highlighting the underrepresentation of women directors in Oscar-nominated films.
      </p>
      <p>
        Using interactive charts, it reveals historical patterns and advocates for more diversity in
        Hollywood.
      </p>
      <template #tools>
        <Tool icon :tool="ALL_TOOLS.typescript" />
        <Tool icon :tool="ALL_TOOLS.d3js" />
      </template>
    </Project>
  </div>
</template>
