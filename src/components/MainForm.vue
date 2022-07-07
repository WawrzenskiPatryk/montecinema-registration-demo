<template>
  <form class="main-form">
    <FormInput
      v-for="input in inputs"
      :key="input.name"
      :name="input.name"
      :type="input.type"
      :placeholder="input.placeholder"
    />
  </form>
</template>

<script>
import FormInput from './form/FormInput.vue';

export default {
  components: {
    FormInput,
  },
  props: {
    inputs: {
      type: Array,
      default: [
        {
          name: 'Lorem ipsum',
          type: 'text',
          placeholder: 'Lorem ipsum dolor sir amet',
        },
      ],
    },
  },
};
</script>

<style lang="scss" scoped>
.main-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
}
</style>
