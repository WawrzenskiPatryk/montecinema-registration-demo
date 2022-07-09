<template>
  <main v-if="step < stepsContent.length" class="main">
    <MainTitle
      :first-part="currentContent.title.firstPart"
      :second-part="currentContent.title.secondPart"
    />
    <BaseCard>
      <MainForm
        @next-step="nextHandler"
        :inputs="currentContent.inputs"
        :button-label="currentContent.buttonLabel"
      />
    </BaseCard>
  </main>

  <main v-else class="main">
    <MainTitle :first-part="`Good job ${storedName}!`" second-part="" />
    <span class="main__success-info">
      We have sent you an email to <strong> {{ storedEmail }} </strong>.
      <br />
      Make sure to click the link from the message to activate your account.
    </span>
    <BaseButton @click="restartApp" class="main__button"> Go to homepage </BaseButton>
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
      storedName: 'Lorem',
      storedEmail: 'loremipsum@loremipsum.com',
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
              name: 'first-name',
              type: 'text',
              placeholder: 'e.g. Jessica',
            },
            {
              name: 'last-name',
              type: 'text',
              placeholder: 'e.g. Walton',
            },
            {
              name: 'date-of-birth',
              type: 'date',
              placeholder: 'DD / MM / YY',
            },
            {
              name: 'privacy-policy',
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
  methods: {
    nextHandler(storedInputs) {
      this.step++;
      if (this.step === this.stepsContent.length) {
        for (const obj of storedInputs) {
          if (obj.name === 'first-name') this.storedName = obj.value;
          if (obj.name === 'email') this.storedEmail = obj.value;
        }
      }
    },
    restartApp() {
      location.reload();
      // make a proper reseting without reloading
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
  min-height: 80vh;

  @media screen and (min-width: 1024px) {
    padding: 124px;
  }

  &__button {
    max-width: 500px;
    width: 100%;
    @media screen and (min-width: 1024px) {
      width: initial;
    }
  }

  &__success-info {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #292a33;
  }
}
</style>
