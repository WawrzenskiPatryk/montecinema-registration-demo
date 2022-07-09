<template>
  <h2 class="main-title">
    <span class="main-title__part main-title__part--darker">
      {{ firstPart }}
    </span>
    <span v-if="showSecondPart" class="main-title__part main-title__part--lighter">
      {{ secondPart }}
    </span>
  </h2>
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
      default: 'Dolor sir amet?',
    },
  },
  computed: {
    showSecondPart() {
      return this.secondPart && this.secondPart.length > 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-title {
  font-family: 'Eczar';
  font-style: normal;
  font-weight: 600;
  line-height: 102%;
  letter-spacing: -0.01em;
  font-size: 4rem;
  text-align: center;

  @media screen and (min-width: 1024px) {
    text-align: initial;
    font-size: 8rem;
  }

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
