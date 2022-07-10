<template>
  <form @submit.prevent class="main-form">
    <FormInput
      v-for="input in inputs"
      :key="input.name"
      :name="input.name"
      :type="input.type"
      :placeholder="input.placeholder"
      :all-were-blured="allWereBlured"
      @validity-update="setValidity"
    />
    <div class="main-form__buttons">
      <BaseButton @click.prevent="nextStep"> {{ buttonLabel }} </BaseButton>
      <a class="main-form__log-in-button" href="#"> Log in instead </a>
    </div>
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
    buttonLabel: {
      type: String,
      default: 'Lorem Ipsum',
    },
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
  data() {
    return {
      storedInputs: [],
      allWereBlured: false,
    };
  },
  mounted() {
    this.storeInputs();
  },
  updated() {
    if (!this.allWereBlured) this.storeInputs();
  },
  methods: {
    nextStep() {
      for (const input of this.storedInputs) {
        if (!input.valid) {
          this.allWereBlured = true;
          return;
        }
      }
      this.allWereBlured = false;
      this.$emit('nextStep', this.storedInputs);
    },
    setValidity(inputPayload) {
      for (const input of this.storedInputs) {
        if (input.name === inputPayload.name) {
          input.valid = inputPayload.valid;
          input.value = inputPayload.value;
        }
      }
    },
    storeInputs() {
      for (let i = 0; i < this.inputs.length; i++) {
        const inputObject = {
          name: this.inputs[i].name,
          valid: false,
          value: null,
        };
        this.storedInputs.push(inputObject);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main-form {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;

  &__buttons {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1.6rem;

    width: 32.7rem;

    @media screen and (min-width: 1024px) {
      flex-direction: row-reverse;
      width: 47.2rem;
    }

    & > * {
      width: 100%;
      @media screen and (min-width: 1024px) {
        width: 50%;
      }
    }
  }

  &__log-in-button {
    user-select: none;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 100%;

    cursor: pointer;
    border: 5px solid;
    height: 5.6rem;
    background-color: #ffffff;
    border-color: #ffffff;
    color: #ec1115;

    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }

    &:active {
      color: #f47073;
    }
  }
}
</style>
