<template>
  <main v-if="stepCounter < stepsContent.length" class="main">
    <MainTitle
      :first-part="currentContent.title.firstPart"
      :second-part="currentContent.title.secondPart"
    />
    <BaseCard>
      <MainForm
        @next-step="nextStepHandler"
        :inputs="currentContent.inputs"
        :button-label="currentContent.buttonLabel"
      />
    </BaseCard>
  </main>

  <main v-else class="main">
    <MainTitle :first-part="`Good job ${capitalizedName}!`" second-part="" />
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
  props: {
    stepsContent: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      stepCounter: 0,
      storedName: 'lorem',
      storedEmail: 'lorem@loremipsum.com',
    };
  },
  computed: {
    capitalizedName() {
      return this.storedName.charAt(0).toUpperCase() + this.storedName.slice(1);
    },
    currentContent() {
      return this.stepsContent[this.stepCounter];
    },
  },
  methods: {
    nextStepHandler(storedInputs) {
      this.stepCounter++;
      if (this.stepCounter === this.stepsContent.length) {
        for (const obj of storedInputs) {
          if (obj.name === 'first-name') this.storedName = obj.value;
          if (obj.name === 'email') this.storedEmail = obj.value;
        }
      }
    },
    restartApp() {
      this.stepCounter = 0;
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
  padding: 6.4rem 2.4rem;
  gap: 4.8rem;

  min-height: 80vh;

  @media screen and (min-width: 1024px) {
    padding: 12.4rem;
  }

  &__button {
    width: 100%;
    max-width: 32.7rem;
    @media screen and (min-width: 1024px) {
      width: initial;
    }
  }

  &__success-info {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.1rem;
    text-align: center;
    color: #292a33;
  }
}
</style>
