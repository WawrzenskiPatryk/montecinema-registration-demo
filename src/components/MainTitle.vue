<template>
  <h1 class="main-title">
    <span class="main-title__part main-title__part--darker">
      {{ firstPart }}
    </span>
    <span class="main-title__part main-title__part--lighter">
      {{ secondPart }}
    </span>
  </h1>
</template>

<script>
export default {
  props: {
    firstPart: {
      type: String,
      default: 'Lorem ipsum!',
    },
    secondPart: {
      type: String,
      default: 'Dolor sir amet!',
    },
  },
};
</script>

<style lang="scss" scoped>
.main-title {
  font-family: 'Eczar';
  font-style: normal;
  font-weight: 600;
  font-size: 8rem;
  line-height: 102%;
  letter-spacing: -0.01em;

  &__part {
    display: block;

    &--darker {
      color: #343541;
    }
    &--lighter {
      color: #85868d;
    }
  }
}
</style>
