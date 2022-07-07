<template>
  <main class="main">
    <MainTitle first-part="Ahoy you!" second-part="Care to register?" />
    <BaseCard class="page__base-card"></BaseCard>
  </main>
</template>

<script>
import BaseCard from './base/BaseCard.vue';
import MainTitle from './MainTitle.vue';

export default {
  components: {
    BaseCard,
    MainTitle,
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 124px;
  gap: 48px;
}
</style>
