<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.base-button {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 100%;
  cursor: pointer;
  border: 5px solid;
  height: 5.6rem;

  background: #ec1115;
  border-color: #ec1115;
  color: #ffffff;

  border-radius: 6.4rem;
  padding: 0 4rem;

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
</style>
