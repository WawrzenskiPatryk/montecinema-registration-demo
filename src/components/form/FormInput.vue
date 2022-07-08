<template>
  <div class="form-input">
    <label class="form-input__label" :for="name">{{ name }}</label>

    <div class="form-input__field-wrapper">
      <input
        :name="name"
        class="form-input__field"
        :placeholder="placeholder"
        :type="computedType"
        v-model="inputValue"
        @focus="focusHandler('focus')"
        @blur="focusHandler('blur')"
        required
      />
      <div
        v-if="type === 'password'"
        @click="togglePasswordVisibility"
        class="form-input__show-password-button"
        :class="{ 'form-input__show-password-button--shown': passwordInputVisible }"
      >
        <img src="../../assets/eye.svg" alt="show-password" />
      </div>
    </div>

    <FormValidator :type="type" :input-value="inputValue" :wasBlured="wasBlured" />
  </div>
</template>

<script>
import FormValidator from './FormValidator.vue';

export default {
  components: {
    FormValidator,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      validator(value) {
        return ['text', 'password', 'date'].join(' ').includes(value);
      },
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      inputValue: '',
      wasBlured: false,
      dateInputFocused: false,
      passwordInputVisible: false,
    };
  },
  computed: {
    computedType() {
      if (
        (this.type === 'date' && !this.dateInputFocused) ||
        (this.type === 'password' && this.passwordInputVisible)
      ) {
        return 'text';
      } else return this.type;
    },
  },
  methods: {
    focusHandler(action) {
      if (action === 'blur') this.wasBlured = true;
      if (action === 'focus') this.wasBlured = false;
      if (this.type !== 'date') return;
      if (action === 'focus') {
        this.dateInputFocused = true;
      } else if (action === 'blur' && this.inputValue === '') {
        this.dateInputFocused = false;
      }
    },
    togglePasswordVisibility() {
      this.passwordInputVisible = !this.passwordInputVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.form-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  &__label {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    color: #f47073;
  }

  &__field-wrapper {
    position: relative;
  }

  &__field {
    gap: 10px;

    background: #f7f7f7;
    color: #343541;
    border: 1px solid #f7f7f7;
    border-radius: 8px;

    width: 327px;
    height: 56px;
    padding: 24px 16px 24px 24px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;

    // NOT WORKING EXACTLY AS INTENDED
    text-overflow: ellipsis;
    //

    @media screen and (min-width: 1024px) {
      width: 472px;
    }

    &::placeholder {
      color: #85868d;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
    }

    &:focus-visible {
      outline: none;
    }

    @media (hover: hover) {
      &:hover {
        background: #e5e5e5;
        border: 1px solid #e5e5e5;
      }
    }

    &:focus,
    &:active {
      line-height: 18px;
      background: rgba(47, 128, 237, 0.1);
      border: 1px solid #2f80ed;
    }
  }

  &__show-password-button {
    user-select: none;
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);

    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    cursor: pointer;

    &--shown {
      &::before {
        content: '';
        position: absolute;
        padding: 14px 0;
        width: 1.5px;
        border-radius: 1px;
        background: #5d5d67;
        transform: translateY(0.5px) rotate(45deg);
      }
    }
  }
}
</style>
