<template>
  <form class="main-form">
    <FormInput
      v-for="input in inputs"
      :key="input.name"
      :name="input.name"
      :type="input.type"
      :placeholder="input.placeholder"
    />
    <div class="main-form__buttons">
      <BaseButton type="hollow"> Log in instead </BaseButton>
      <BaseButton type="fill"> Next Step </BaseButton>
    </div>
    <BaseButton type="fill"> Go to homepage </BaseButton>
  </form>
</template>

<script>
import FormInput from './FormInput.vue';
import BaseButton from '../base/BaseButton.vue';

export default {
  components: {
    FormInput,
    BaseButton,
  },
  props: {
    inputs: {
      type: Array,
      default: [
        {
          name: 'Lorem ipsum',
          type: 'text',
          placeholder: 'Lorem ipsum dolor sir amet',
        },
      ],
    },
  },
};
</script>

<style lang="scss" scoped>
.main-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  &__buttons {
    display: flex;
    flex-direction: column-reverse;
    align-items: stretch;
    padding: 0px;
    gap: 16px;

    width: 327px;
    // height: 128px;

    @media screen and (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: stretch;
      padding: 0px;
      gap: 16px;

      width: 472px;
      height: 56px;
    }

    & > * {
      width: 100%;
      @media screen and (min-width: 1024px) {
        width: 50%;
      }
    }
  }
}
</style>
