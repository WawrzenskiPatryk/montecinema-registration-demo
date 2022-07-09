<template>
  <div v-if="type === 'password'" class="validation-info">
    <span :class="passwordLenghClass"> At least 8 characters </span>
    <span :class="passwordLettersClass"> At least one letter </span>
    <span :class="passwordDigitsClass"> At least one digit </span>
  </div>

  <div v-else-if="type === 'date'" class="validation-info">
    <span :class="dateClass"> You should be minium 18 years old </span>
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
        return ['text', 'email', 'password', 'date', 'checkbox'].join(' ').includes(value);
      },
    },
    inputValue: { type: [String, Boolean], required: true },
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

    dateIsCorrect() {
      if (this.inputValue) {
        const today = new Date();
        const birthDate = new Date(this.inputValue);
        const yearsDifference = today.getFullYear() - birthDate.getFullYear();
        const monthsDifference = today.getMonth() - birthDate.getMonth();
        const daysDifference = today.getDate() - birthDate.getDate();
        let realAge;

        if (monthsDifference < 0 || daysDifference < 0) realAge = yearsDifference - 1;
        else realAge = yearsDifference;

        if (realAge >= 18) return true;
        else return false;
      } else return false;
    },

    inputIsCorrect() {
      if (this.type === 'checkbox') {
        const checkboxIsCorrect = this.inputValue;
        return checkboxIsCorrect;
      }

      if (this.type === 'text') {
        const textIsCorrect = this.inputValue.length > 0;
        return textIsCorrect;
      }

      if (this.type === 'email') {
        const emailDomain = '@monterail.com';
        const emailIsCorrect =
          this.inputValue.length > emailDomain.length && this.inputValue.includes(emailDomain);
        return emailIsCorrect;
      }

      if (this.type === 'password') {
        const passwordIsCorrect =
          this.passwordLengthIsCorrect &&
          this.passwordLettersAreCorrect &&
          this.passwordDigitsAreCorrect;

        return passwordIsCorrect;
      }

      if (this.type === 'date') {
        const dateIsCorrect = this.dateIsCorrect;
        return dateIsCorrect;
      }
    },

    dateClass() {
      return this.getValidityClass(this.dateIsCorrect);
    },
    passwordLenghClass() {
      return this.getValidityClass(this.passwordLengthIsCorrect);
    },
    passwordLettersClass() {
      return this.getValidityClass(this.passwordLettersAreCorrect);
    },
    passwordDigitsClass() {
      return this.getValidityClass(this.passwordDigitsAreCorrect);
    },
  },
  methods: {
    getValidityClass(condition) {
      if (condition) return 'validation-info--correct';
      else if (this.wasBlured) return 'validation-info--incorrect';
      else return '';
    },
    updateInputValidity() {
      this.$emit('update', this.inputIsCorrect);
    },
  },
  watch: {
    inputIsCorrect() {
      this.updateInputValidity();
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
  font-size: 1.4rem;
  line-height: 170%;

  &--incorrect {
    color: #ec1115;
  }

  &--correct {
    color: #27ae60;
  }
}
</style>
