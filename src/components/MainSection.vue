<template>
  <main v-if="step < 2" class="main">
    <MainTitle
      :first-part="currentContent.title.firstPart"
      :second-part="currentContent.title.secondPart"
    />
    <BaseCard class="page__base-card">
      <MainForm
        @next-step="step++"
        :inputs="currentContent.inputs"
        :button-label="currentContent.buttonLabel"
      />
    </BaseCard>
  </main>
</template>

<script>
import BaseCard from './base/BaseCard.vue';
import MainTitle from './MainTitle.vue';
import MainForm from './form/MainForm.vue';
import BaseButton from './base/BaseButton.vue';

export default {
  components: {
    BaseCard,
    MainTitle,
    MainForm,
    BaseButton,
  },
  data() {
    return {
      step: 0,
      stepsContent: [
        {
          title: {
            firstPart: 'Ahoy you!',
            secondPart: 'Care to register?',
          },
          inputs: [
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
          ],
          buttonLabel: 'Next Step',
        },
        {
          title: {
            firstPart: 'Great!',
            secondPart: 'Now your name',
          },
          inputs: [
            {
              name: 'first name',
              type: 'text',
              placeholder: 'e.g. Jessica',
            },
            {
              name: 'last name',
              type: 'text',
              placeholder: 'e.g. Walton',
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
          buttonLabel: 'Register',
        },
      ],
    };
  },
  computed: {
    currentContent() {
      return this.stepsContent[this.step];
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 24px;
  gap: 48px;

  @media screen and (min-width: 1024px) {
    padding: 124px;
  }

  &__button {
    width: 100%;
    @media screen and (min-width: 1024px) {
      width: initial;
    }
  }
}
</style>
