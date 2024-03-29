<template>
  <div class="form-input__wrapper">
    <div v-if="type === 'checkbox'" class="form-input form-input--checkbox">
      <input
        class="form-input__checkbox"
        :class="checkboxClass"
        :name="name"
        v-model="inputValue"
        :type="computedType"
      />
      <label class="form-input__checkbox-label" :for="name">
        I accept <a href="#" class="form-input__checkbox-link"> Privacy Policy </a>
      </label>
    </div>

    <div v-else class="form-input">
      <label class="form-input__label" :for="name">{{ computedName }}</label>

      <div class="form-input__field-wrapper">
        <input
          :name="name"
          class="form-input__field"
          :class="inputClass"
          :placeholder="placeholder"
          :type="computedType"
          v-model="inputValue"
          @focus="focusHandler($event, 'focus')"
          @blur="focusHandler($event, 'blur')"
        />
        <div
          v-if="type === 'password'"
          @click="togglePasswordVisibility"
          class="form-input__password-visibility-button"
          :class="{ 'form-input__password-visibility-button--shown': passwordInputVisible }"
        >
          <img src="../../assets/eye.svg" alt="show-password" />
        </div>
      </div>
    </div>

    <FormInputValidator
      @update="updateInputValidity"
      :type="type"
      :input-value="inputValue"
      :was-blured="wasBlured"
      :all-were-blured="allWereBlured"
    />
  </div>
</template>

<script>
import FormInputValidator from './FormInputValidator.vue';

export default {
  components: {
    FormInputValidator,
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
        return ['text', 'email', 'password', 'date', 'checkbox'].join(' ').includes(value);
      },
    },
    placeholder: {
      type: String,
      required: false,
    },
    allWereBlured: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      inputValue: '',
      isInputValid: false,
      wasBlured: false,
      dateInputFocused: false,
      passwordInputVisible: false,
    };
  },
  computed: {
    computedName() {
      return this.name.split('-').join(' ');
    },
    computedType() {
      if (
        (this.type === 'date' && !this.dateInputFocused) ||
        (this.type === 'password' && this.passwordInputVisible)
      ) {
        return 'text';
      } else return this.type;
    },
    inputClass() {
      return {
        'form-input__field--incorrect':
          (this.wasBlured || this.allWereBlured) && !this.isInputValid,
        'form-input__field--password': this.type === 'password',
      };
    },
    checkboxClass() {
      return {
        'form-input__checkbox--incorrect':
          (this.wasBlured || this.allWereBlured) && !this.isInputValid,
      };
    },
  },
  methods: {
    focusHandler(event, action) {
      if (action === 'blur') this.wasBlured = true;
      if (action === 'focus') this.wasBlured = false;
      if (this.type === 'date') {
        if (action === 'focus') {
          this.dateInputFocused = true;
          this.triggerMobileDatepicker(event.target);
        } else if (action === 'blur' && this.inputValue === '') {
          this.dateInputFocused = false;
        }
      }
    },
    triggerMobileDatepicker(target) {
      setTimeout(() => {
        target.focus();
        target.click();
      }, 0);
    },
    togglePasswordVisibility() {
      this.passwordInputVisible = !this.passwordInputVisible;
    },
    updateInputValidity(value) {
      this.isInputValid = value;
    },
    validityUpdateHandler() {
      const isValueString = typeof this.inputValue === 'string';
      const trimmedValue = isValueString ? this.inputValue.trim() : this.inputValue;
      const inputPayload = {
        name: this.name,
        valid: this.isInputValid,
        value: trimmedValue,
      };
      this.$emit('validityUpdate', inputPayload);
    },
  },
  watch: {
    inputValue() {
      this.validityUpdateHandler();
    },
    isInputValid() {
      this.validityUpdateHandler();
    },
  },
};
</script>

<style lang="scss" scoped>
.form-input {
  &,
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  &--checkbox {
    flex-direction: row;
    align-items: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.1rem;

    color: #292a33;
  }

  &__checkbox {
    position: relative;
    left: 0;
    width: 2.4rem;
    height: 2.4rem;
    opacity: 0;
  }

  &__checkbox-label {
    &::before {
      content: '';
      pointer-events: none;
      position: absolute;
      left: 0;
      transform: translateY(-2px);
      width: 2.4rem;
      height: 2.4rem;
      background-color: #ffffff;
      border: 0.75px solid #aeaeb3;
      border-radius: 0.8rem;
    }
  }

  &__checkbox--incorrect + &__checkbox-label::before {
    outline: #ec1115 solid 2px;
  }

  @media (hover: hover) {
    &__checkbox:hover + &__checkbox-label::before {
      background-color: #f7f7f7;
    }
  }

  &__checkbox:focus-visible + &__checkbox-label::before {
    background-color: #f7f7f7;
    outline: #f47073 solid 2px;
  }

  &__checkbox:checked + &__checkbox-label::before {
    content: '\002714';
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5d5d67;
    border-color: #5d5d67;
    color: #ffffff;
    font-size: 2rem;
  }

  &__checkbox-link {
    text-decoration: underline;
    color: #292a33;
  }

  &__label {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.8rem;
    text-transform: uppercase;
    color: #f47073;
  }

  &__field-wrapper {
    position: relative;
  }

  &__field {
    background-color: #f7f7f7;
    color: #343541;
    border: 1px solid #f7f7f7;
    border-radius: 0.8rem;

    width: 32.7rem;
    height: 5.6rem;
    padding: 0 2.4rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;

    text-overflow: ellipsis;

    @media screen and (min-width: 1024px) {
      width: 47.2rem;
    }

    &--password {
      padding-right: 6rem;
    }

    &--incorrect {
      border: 1px solid #ec1115;
    }

    &::placeholder {
      user-select: none;

      color: #85868d;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 2.1rem;
      margin-right: 7.6rem;
    }

    &:focus-visible {
      outline: none;
    }

    @media (hover: hover) {
      &:hover {
        background-color: #e5e5e5;
        border: 1px solid #e5e5e5;
      }
    }

    &:focus,
    &:active {
      line-height: 1.8rem;
      background-color: rgba(47, 128, 237, 0.1);
      border: 1px solid #2f80ed;
    }
  }

  &__password-visibility-button {
    user-select: none;
    position: absolute;
    right: 1.6rem;
    top: 50%;
    transform: translateY(-50%);

    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;

    &--shown {
      &::before {
        content: '';
        position: absolute;
        padding: 1.4rem 0;
        width: 0.15rem;
        border-radius: 1px;
        background-color: #5d5d67;
        transform: translateY(0.5px) rotate(45deg);
      }
    }
  }
}
</style>
