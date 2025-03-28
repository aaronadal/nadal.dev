<script setup lang="ts">
import ExperienceBar from './components/ExperienceBar.vue';
import ExperienceTimeline from './components/ProfessionalTimeline.vue';
import Hero from './components/Hero.vue';
import EducationTimeline from './components/EducationTimeline.vue';
import UsedTechnologies from './components/UsedTechnologies.vue';
import PersonalProjects from './components/PersonalProjects.vue';
import ContactMethods from './components/ContactMethods.vue';
import AboutMe from './components/AboutMe.vue';
</script>

<template>
  <main>
    <div class="frontpage">
      <section>
        <Hero />
      </section>
      <section class="wide">
        <ExperienceBar />
      </section>

      <div class="scroll">&#8964;</div>
    </div>

    <section>
      <h2>Professional experience</h2>
      <ExperienceTimeline />
    </section>
    <section>
      <h2>Other relevant projects</h2>
      <PersonalProjects />
    </section>
    <section>
      <h2>A bit more about me</h2>
      <AboutMe />
    </section>
    <section>
      <h2>Technologies I worked with</h2>
      <UsedTechnologies />
    </section>
    <section>
      <h2>Education</h2>
      <EducationTimeline />
    </section>
    <section>
      <h2>Get in touch</h2>
      <ContactMethods />
    </section>
  </main>

  <div class="footer">
    <section>
      <p>Thanks for reading &lt;3</p>
    </section>
  </div>
</template>
