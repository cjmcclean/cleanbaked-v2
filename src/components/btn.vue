<template>
  <button class="btn" type="button" :disabled="disabled" @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'btn',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss">
.btn {
  padding: 12px 24px;
  font-size: $size-reg;
  background: $cb-blue;
  border: 1px solid $cb-yellow;
  border-radius: 4px;
  color: $cb-yellow;
  cursor: pointer;
  transition: all 0.24s $easeInOutQuad;

  // states
  &:hover {
    background: $cb-yellow;
    color: $cb-blue;
  }
}
</style>
