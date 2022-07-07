<template>
  <div class="form-input">
    <label class="form-input__label" :for="name">{{ name }}</label>
    <input
      :name="name"
      class="form-input__field"
      :placeholder="placeholder"
      :type="type"
      required
    />
  </div>
</template>

<script>
export default {
  props: ['name', 'type', 'placeholder'],
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
    display: flex;
    flex-direction: row;
    align-items: center;
    // padding: 24px;
    padding: 24px 16px 24px 24px;
    gap: 10px;

    background: #f7f7f7;
    border-radius: 8px;
    border: none;

    width: 327px;

    @media screen and (min-width: 1024px) {
      width: 472px;
    }

    // NOT WORKING EXACTLY AS INTENDED
    text-overflow: ellipsis;
    //

    &::placeholder {
      color: #85868d;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
    }
  }
}
</style>
