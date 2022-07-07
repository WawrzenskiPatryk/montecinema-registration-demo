<template>
  <header class="header">
    <img class="header__logo" src="../assets/logo.svg" alt="monte-cinema-logo" />
    <h2 class="header__title">Developed with ❤️ by Monterail</h2>
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 2.4rem;
  gap: 89.5rem;

  width: 100%;
  height: 9.8rem;

  @media screen and (min-width: 1024px) {
    justify-content: space-between;
    padding: 2.5rem 4.8rem;
    gap: 31.1rem;
  }

  &__title {
    font-family: 'Roboto Mono', monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.1rem;
    text-align: right;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #343541;

    display: none;

    @media screen and (min-width: 1024px) {
      display: block;
    }
  }
}
</style>
