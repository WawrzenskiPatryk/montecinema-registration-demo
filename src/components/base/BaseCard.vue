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
  gap: 40px;
  position: relative;

  @media screen and (min-width: 1024px) {
    width: 600px;
    padding: 64px;
    box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
    border-radius: 24px;
  }
}
</style>
