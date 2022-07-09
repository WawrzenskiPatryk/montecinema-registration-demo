<template>
  <form @submit.prevent class="main-form">
    <FormInput
      v-for="input in inputs"
      :key="input.name"
      :name="input.name"
      :type="input.type"
      :placeholder="input.placeholder"
      @validity-update="setValidity"
    />
    <div class="main-form__buttons">
      <a class="main-form__log-in-button" href="#"> Log in instead </a>
      <BaseButton @click.prevent="nextStep"> {{ buttonLabel }} </BaseButton>
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
    };
  },
  mounted() {
    this.storeInputs();
  },
  updated() {
    this.storeInputs();
    console.log(this.storedInputs);
  },
  methods: {
    nextStep() {
      console.log(this.storedInputs);
      for (const input of this.storedInputs) {
        if (!input.valid) {
          alert('Fill all input fields!');
          return;
        }
      }
      this.$emit('nextStep', this.storedInputs);
    },
    setValidity(inputStatus) {
      for (const input of this.storedInputs) {
        if (input.name === inputStatus.name) {
          input.valid = inputStatus.valid;
          input.value = inputStatus.value;
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
    flex-direction: column-reverse;
    align-items: stretch;
    gap: 1.6rem;

    width: 32.7rem;

    @media screen and (min-width: 1024px) {
      flex-direction: row;
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
    background: #ffffff;
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
