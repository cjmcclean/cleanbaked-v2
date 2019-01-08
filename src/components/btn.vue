<template>
  <button
    class="btn"
    :class="classObject"
    type="button"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'cb-btn',
  props: {
    btnTheme: {
      default: 'btn-default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  computed: {
    classObject: function() {
      return {
        'btn-default': this.btnTheme === 'btn-default',
        'btn-blue': this.btnTheme === 'btn-blue',
        'btn-green': this.btnTheme === 'btn-green',
        'btn-orange': this.btnTheme === 'btn-orange',
        'btn-plum': this.btnTheme === 'btn-plum',
        'btn-red': this.btnTheme === 'btn-red',
        'btn-yellow': this.btnTheme === 'btn-yellow'
      }
    }
  }
}
</script>

<style lang="scss">
.btn {
  padding: 0.67rem 1.4rem 0.67rem;
  font-size: $size-reg;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.24s $easeInOutQuad, border-color 0.24s $easeInOutQuad,
    color 0.24s $easeInOutQuad;

  // nested rule(s)
  & + & {
    margin-right: 0.67rem;
    margin-left: 0.67rem;
  }
}

.btn-default {
  background: $cb-gray-light;
  border-color: $cb-black-light;
  color: $cb-black;

  // states
  &:hover {
    background: $cb-cream;
    color: $cb-blue;
  }
}

.btn-blue {
  background: $cb-blue;
  border-color: $cb-yellow;
  color: $cb-yellow;

  // states
  &:hover {
    background: $cb-yellow;
    border-color: $cb-blue;
    color: $cb-blue;
  }
}

.btn-green {
  background: $cb-green;
  border-color: adjust-color($cb-green, $lightness: -56%);
  color: adjust-color($cb-green, $lightness: -56%);

  // states
  &:hover {
    background: adjust-color($cb-green, $lightness: 24%);
    border-color: adjust-color($cb-green, $lightness: -56%);
    color: adjust-color($cb-green, $lightness: -56%);
  }
}

.btn-orange {
  background: $cb-orange;
  border-color: $cb-blue;
  color: $cb-blue;

  // states
  &:hover {
    background: $cb-blue;
    border-color: $cb-orange;
    color: $cb-orange;
  }
}

.btn-plum {
  background: $cb-plum;
  border-color: $cb-yellow;
  color: $cb-yellow;

  // states
  &:hover {
    background: $cb-yellow;
    border-color: $cb-plum;
    color: $cb-plum;
  }
}

.btn-red {
  background: $cb-red;
  border-color: $cb-blue;
  color: $cb-yellow;

  // states
  &:hover {
    background: $cb-yellow;
    border-color: $cb-red;
    color: $cb-red;
  }
}

.btn-yellow {
  background: $cb-yellow;
  border-color: $cb-blue;
  color: $cb-blue;

  // states
  &:hover {
    background: $cb-blue;
    border-color: $cb-yellow;
    color: $cb-yellow;
  }
}
</style>
