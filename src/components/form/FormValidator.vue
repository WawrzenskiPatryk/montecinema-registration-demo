<template>
  <div v-if="type === 'password'" class="validation-info">
    <span :class="passwordLenghClass"> At least 8 characters </span>
    <span :class="passwordLettersClass"> At least one letter </span>
    <span :class="passwordDigitsClass"> At least one digit </span>
  </div>

  <div v-else-if="type === 'date'" class="validation-info">
    <span :class="{ 'validation-info--correct': true }">You should be minium 18 years old</span>
  </div>
</template>

<script>
export default {
  props: {
    wasBlured: { type: Boolean, required: true },
    type: {
      type: String,
      required: true,
      validator(value) {
        return ['text', 'email', 'password', 'date'].join(' ').includes(value);
      },
    },
    inputValue: { type: String, required: true },
  },
  computed: {
    passwordLengthIsCorrect() {
      return this.inputValue.length >= 8;
    },
    passwordLettersAreCorrect() {
      return /[a-zA-Z]/g.test(this.inputValue);
    },
    passwordDigitsAreCorrect() {
      return /\d/.test(this.inputValue);
    },
    inputIsCorrect() {
      const emailDomain = '@monterail.com';

      const passwordIsCorrect =
        this.passwordLengthIsCorrect &&
        this.passwordLettersAreCorrect &&
        this.passwordDigitsAreCorrect;

      const emailIsCorrect =
        this.inputValue.length > emailDomain.length && this.inputValue.includes(emailDomain);

      if (this.type === 'password') return passwordIsCorrect;
      else if (this.type === 'email') return emailIsCorrect;
    },
    passwordLenghClass() {
      if (this.passwordLengthIsCorrect) return 'validation-info--correct';
      else if (this.wasBlured) return 'validation-info--incorrect';
      else return '';
    },
    passwordLettersClass() {
      if (this.passwordLettersAreCorrect) return 'validation-info--correct';
      else if (this.wasBlured) return 'validation-info--incorrect';
      else return '';
    },
    passwordDigitsClass() {
      if (this.passwordDigitsAreCorrect) return 'validation-info--correct';
      else if (this.wasBlured) return 'validation-info--incorrect';
      else return '';
    },
  },
  methods: {
    updatePasswordValidity() {
      this.$emit('update', this.inputIsCorrect);
    },
  },
  watch: {
    inputIsCorrect() {
      this.updatePasswordValidity();
    },
  },
};
</script>

<style lang="scss" scoped>
.validation-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 170%;

  &--incorrect {
    color: #ec1115;
  }

  &--correct {
    color: #27ae60;
  }
}
</style>
