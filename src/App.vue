<template>
  <TheHeader />
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap');

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
</style>
