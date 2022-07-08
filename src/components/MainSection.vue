<template>
  <main class="main">
    <MainTitle :first-part="title.firstPart" :second-part="title.secondPart" />
    <BaseCard class="page__base-card">
      <MainForm :inputs="inputs" />
    </BaseCard>
  </main>
</template>

<script>
import BaseCard from './base/BaseCard.vue';
import MainTitle from './MainTitle.vue';
import MainForm from './form/MainForm.vue';

export default {
  components: {
    BaseCard,
    MainTitle,
    MainForm,
  },
  data() {
    return {
      title: {
        firstPart: 'Ahoy you!',
        secondPart: 'Care to register?',
      },
      inputs: [
        {
          name: 'first name',
          type: 'text',
          placeholder: 'e.g. Jessica',
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'Something ending with monterail.com',
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Enter your password',
        },
        {
          name: 'date of birth',
          type: 'date',
          placeholder: 'DD / MM / YY',
        },
        {
          name: 'checkbox',
          type: 'checkbox',
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
