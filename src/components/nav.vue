<template>
  <div class="sidebar-nav" role="navigation">
    <cb-link><router-link to="/">Home</router-link></cb-link>
    <cb-link><router-link to="/portfolio">Portfolio</router-link></cb-link>
    <cb-link><router-link to="/process">Process</router-link></cb-link>
    <cb-link><router-link to="/about">About</router-link></cb-link>
    <cb-link><router-link to="/contact">Contact</router-link></cb-link>
    <cb-link
      ><router-link to="/vue-docs" v-if="checkMode"
        >Vue Docs</router-link
      ></cb-link
    >
  </div>
</template>

<script>
import posed from 'vue-pose'

export default {
  name: 'sidebar-nav',
  components: {
    CbLink: posed.div({
      enter: {
        opacity: 1,
        y: 0,
        transition: { duration: 280, ease: 'easeIn' }
      },
      exit: {
        opacity: 0,
        y: 20,
        transition: { duration: 280, ease: 'easeIn' }
      }
    })
  },
  computed: {
    checkMode: function() {
      const mode = process.env.NODE_ENV

      return mode === 'development' ? true : false
    }
  }
}
</script>

<style lang="scss">
.sidebar-nav {
  a {
    display: block;
    position: relative;
    width: 100%;
    padding: 8px 20px;
    color: $cb-gray-dark;
    font-weight: bold;
    font-size: $size-md;
    font-family: $leagueSpartan;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.2s $easeInOutQuad;

    // pseudo
    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 10%;
      width: 36px;
      height: 1px;
      margin-top: -4px;
      background: $cb-gray-dark;
      opacity: 0;
      transition: opacity 0.64s $easeInOutBack;
    }

    &::after {
      right: 10%;
      left: auto;
    }

    // states
    &:hover {
      color: $cb-white;

      &::before,
      &::after {
        opacity: 1;
      }
    }

    &.router-link-exact-active {
      color: $cb-yellow;
    }
  }
}
</style>
