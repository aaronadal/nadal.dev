<script setup lang="ts">
import { ref } from 'vue';
import CheckIcon from './CheckIcon.vue';

const skills = {
  curious: {
    title: 'Curiosity and commitment',
    description: 'Always eager to learn and improve',
  },
  adaptable: {
    title: 'Adaptability',
    description: 'Comfortable navigating change and new challenges',
  },
  learner: {
    title: 'Continuous learning',
    description: 'Always exploring new knowledge and skills',
  },
  'detail-oriented': {
    title: 'Attention to detail',
    description: 'Ensures efficiency in work and team management',
  },
  humorous: {
    title: 'Sense of humor',
    description: 'Loves puns and bad jokes',
  },
  positive: {
    title: 'Positive attitude',
    description: 'Believes that having fun is key to doing great work',
  },
  'knowledge-sharer': {
    title: 'Knowledge sharing',
    description: 'Enjoys contributing to the growth of others',
  },
};

const skillKeys = Object.keys(skills) as (keyof typeof skills)[];

const skill = ref<keyof typeof skills | null>(null);

const showMore = ref(false);
</script>

<template>
  <div class="about-me">
    <div class="description" :class="{ featured: skill !== null, [`${skill}`]: skill !== null }">
      <div class="text" :class="{ 'shown': showMore }">
      <p>
        <span class="curious adaptable">
          I am a <b>curious, committed, and highly adaptable</b> professional.</span
        >
        <span class="learner">
          I thrive on tackling new challenges and <b>continuously learning</b>, always striving to
          improve in every project I take on.</span
        >
        <span class="detail-oriented">
          <b> Attention to detail and strong organizational skills</b> are key aspects of my work,
          allowing me to manage teams and coordinate tasks efficiently.</span
        >
      </p>
      <p>
        <span class="humorous positive"
          >I believe that enjoying what you do is just as important as doing it well. That's why I
          bring a <b>sense of humor and a positive attitude</b> to every collaboration.</span
        >
        I am motivated by collaboration in multidisciplinary and multicultural environments, where
        communication and leadership play a crucial role.
        <span class="learner"
          >I believe in continuous learning and the importance of flexibility to successfully
          navigate change.</span
        >
        <span class="knowledge-sharer">
          Additionally, I am passionate about
          <b>sharing knowledge and contributing to the growth of those around me</b></span
        >.
      </p>
      </div>

      <a class="show-more" @click="showMore = !showMore">
        {{ showMore ? '- Show less' : '+ Show more' }}
      </a>
    </div>

    <div class="skills">
      <div
        v-for="key in skillKeys"
        :key="key"
        :class="{ active: key === skill }"
        @mouseenter="skill = key"
        @mouseleave="skill = null"
      >
        <CheckIcon />
        <h3>{{ skills[key].title }}</h3>
        <div>{{ skills[key].description }}</div>
      </div>
    </div>
  </div>
</template>
