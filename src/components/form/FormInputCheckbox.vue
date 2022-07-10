<template>
  <div class="form-input-checkbox">
    <input
      class="form-input-checkbox__checkbox"
      :class="checkboxClass"
      :name="name"
      v-model="inputValue"
      :type="computedType"
    />
    <!-- <input class="form-input-checkbox__checkbox" type="checkbox" /> -->
    <label class="form-input-checkbox__checkbox-label" :for="name">
      I accept <a href="#" class="form-input-checkbox__checkbox-link"> Privacy Policy </a>
    </label>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.form-input-checkbox {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: #292a33;

  &__checkbox {
    position: relative;
    left: 0;
    width: 2.4rem;
    height: 2.4rem;
    opacity: 0;
  }

  &__checkbox--incorrect + &__checkbox-label::before {
    outline: #ec1115 solid 2px;
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
}
</style>
