<template>
  <div class="form-input">
    <label class="form-input__label" :for="name">{{ name }}</label>

    <input
      :name="name"
      class="form-input__field"
      :placeholder="placeholder"
      :type="computedType"
      v-model="inputValue"
      @focus="focusDateHandler('focus')"
      @blur="focusDateHandler('blur')"
      required
    />

    <div v-if="type === 'password'" class="form-input__validation-info">
      <span>At least 8 characters</span>
      <span>At least one letter</span>
      <span>At least one digit</span>
    </div>

    <div v-else-if="type === 'date'" class="form-input__validation-info">
      <span>You should be minium 18 years old</span>
    </div>
  </div>
</template>

<script>
export default {
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
      dateInputFocused: false,
    };
  },
  computed: {
    computedType() {
      if (this.type === 'date' && this.dateInputFocused) return this.type;
      if (this.type === 'date') return 'text';
      return this.type;
    },
  },
  methods: {
    focusDateHandler(action) {
      if (this.type !== 'date') return;
      if (action === 'focus') {
        this.dateInputFocused = true;
      } else if (action === 'blur' && this.inputValue === '') {
        this.dateInputFocused = false;
      }
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

  &__field {
    gap: 10px;

    background: #f7f7f7;
    color: #343541;
    border: 1px solid #f7f7f7;
    border-radius: 8px;

    width: 327px;
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

  &__validation-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 170%;
  }
}
</style>
