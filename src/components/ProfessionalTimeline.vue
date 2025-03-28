<script setup lang="ts">
import Experience from './Experience.vue';
import ShoperyLogo from '../assets/shopery.png';
import PlanatecLogo from '../assets/planatec.png';
</script>

<template>
  <div class="experience timeline">
    <Experience
      type="job"
      start="2024"
      end=""
      role="Staff Backend Engineer"
      company="Shopery Networks"
      :logo="ShoperyLogo"
      :functions="[
        'Built a high-concurrency, API-first SaaS platform.',
        'Designed and implemented a real-time system using Go and WebSockets.',
        'Applied event-driven architecture, CQRS, and DDD principles.',
        'Led critical architectural decisions for scalability and reliability.',
        'Coordinated a small, multicultural, and multidisciplinary team.',
      ]"
    >
      <p>
        At Shopery Networks, I have been contributing to a
        <b
          >high-concurrency, API-first SaaS platform designed to handle demanding real-time
          workloads</b
        >. I play a key role in designing and implementing robust
        <b>systems capable of managing heavy traffic while ensuring low latency and reliability</b>.
      </p>
      <p>
        A major focus of my work has been leading the
        <b>design of a real-time system built with Go and WebSockets</b>. This solution efficiently
        <b>handles large volumes of simultaneous events</b>, leveraging an event-driven architecture
        with CQRS principles.
      </p>
      <p>
        In addition to hands-on development, I
        <b>coordinate a small, multicultural, and multidisciplinary team</b>. I provide technical
        mentorship, facilitate collaboration, and drive architectural decisions that directly impact
        the platform's scalability and resilience.
      </p>
      <p>
        Our tech stack includes PHP with Symfony, Doctrine, and MySQL, supported by Redis,
        ElasticSearch, and LavinMQ for data management and asynchronous communication. We follow
        Domain-Driven Design (DDD) and Hexagonal Architecture to ensure clean, maintainable code.
        Continuous deployment and cloud infrastructure management are achieved using GitHub Actions,
        Kubernetes and Google Cloud services.
      </p>
      <p>
        This role has <b>deepened my expertise in building large-scale, real-time systems</b> and
        strengthened my leadership abilities in a collaborative and fast-paced environment.
      </p>
    </Experience>

    <Experience
      type="job"
      start="2014"
      end="2024"
      role="Senior FullStack Engineer"
      company="Planatec Software"
      :logo="PlanatecLogo"
      :functions="[
        'Led the end-to-end development of a GDPR management SaaS platform.',
        'Modernized a legacy monolithic application into a microservices architecture.',
        'Applied Hexagonal Architecture and CI/CD pipelines.',
        'Specialized in PHP, Node.js, and Python for backend development.',
        'Developed user-friendly interfaces with Vue.js and TypeScript.',
        'Mentored new team members and led high-responsibility initiatives.',
      ]"
    >
      <p>
        During my time at Planatec, I began as a junior developer, contributing to various PHP and
        Python projects. Over time, I advanced to more senior roles by
        <b
          >participating in larger, high-responsibility initiatives, mentoring new team members, and
          leading the end-to-end development of a SaaS platform</b
        >
        for GDPR management.
      </p>
      <p>
        A significant part of my experience involved
        <b>modernizing a legacy monolithic application</b>. I played a key role in its migration to
        a <b>scalable, modular architecture using microservices</b>, with PHP and Node.js for the
        backend and TypeScript with Vue 3 for the frontend. This transformation was guided by
        <b>Hexagonal Architecture principles</b> and supported by robust
        <b>CI/CD pipelines deployed on Google Cloud</b>.
      </p>
      <p>
        My backend expertise spans multiple languages and frameworks, including PHP with Symfony,
        Node.js with Express, and Python.
        <b
          >I consistently applied best practices like SOLID and DRY principles, as well as design
          patterns to ensure maintainable and efficient code</b
        >.
      </p>
      <p>
        On the frontend, I specialized in developing user-friendly interfaces using TypeScript and
        Vue.js, particularly Vue 3 with its Composition API. I built custom components from scratch
        and seamlessly integrated pre-designed solutions using Vuetify, delivering responsive and
        dynamic user experiences.
      </p>
      <p>
        This diverse experience
        <b
          >strengthened my full-stack capabilities and solidified my ability to drive complex
          projects from concept to completion</b
        >.
      </p>
    </Experience>
  </div>
</template>
