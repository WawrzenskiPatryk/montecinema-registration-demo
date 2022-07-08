<template>
  <button class="base-button" :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return ['hollow', 'fill'].join(' ').includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return this.type === 'hollow' ? 'base-button--hollow' : 'base-button--fill';
    },
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  cursor: pointer;
  border: 5px solid;
  height: 56px;

  &--fill {
    background: #ec1115;
    border-color: #ec1115;
    color: #ffffff;

    border-radius: 64px;
    padding: 0 40px;

    @media (hover: hover) {
      &:hover {
        background: #a60c0e;
        border-color: #a60c0e;
      }
    }

    &:active {
      border-color: #f47073;
    }
  }

  &--hollow {
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
