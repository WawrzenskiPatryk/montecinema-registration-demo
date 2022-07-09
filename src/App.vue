<template>
  <div class="page">
    <TheHeader class="page__header" />
    <MainSection :steps-content="stepsContent" class="page__main-section" />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import MainSection from './components/MainSection.vue';

import steps from './steps.js';

export default {
  components: {
    TheHeader,
    MainSection,
  },
  computed: {
    stepsContent() {
      return steps;
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Eczar:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

a {
  text-decoration: none;
}
</style>
