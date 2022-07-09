<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.base-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;
  position: relative;

  @media screen and (min-width: 1024px) {
    width: 60rem;
    padding: 6.4rem;
    box-shadow: 0 0.4rem 2.2rem rgba(52, 53, 65, 0.15);
    border-radius: 2.4rem;
  }
}
</style>
