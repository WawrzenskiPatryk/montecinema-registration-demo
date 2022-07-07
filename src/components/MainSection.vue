<template>
  <main class="main">
    <MainTitle first-part="Ahoy you!" second-part="Care to register?" />
    <BaseCard class="page__base-card">
      <MainForm :inputs="inputs" />
    </BaseCard>
  </main>
</template>

<script>
import BaseCard from './base/BaseCard.vue';
import MainTitle from './MainTitle.vue';
import MainForm from './MainForm.vue';

export default {
  components: {
    BaseCard,
    MainTitle,
    MainForm,
  },
  data() {
    return {
      inputs: [
        {
          name: 'Email',
          type: 'text',
          placeholder: 'Something ending with monterail.com',
        },
        {
          name: 'Password',
          type: 'text',
          placeholder: 'Enter your password',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 24px 32px;
  gap: 48px;

  @media screen and (min-width: 1024px) {
    padding: 124px;
  }
}
</style>
