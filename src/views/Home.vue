<template>
  <section class="home">
    <h2>Hello there and welcome.</h2>

    <p class="lead">
      I'm a UI/UX designer & developer.<br />
      I build awesome, highly-functional websites and apps tailored to your
      business&rsquo; needs and goals.
    </p>

    <btn btn-theme="btn-blue" :onClick="getInTouch"
      >Let&rsquo;s Start a Conversation</btn
    >

    <btn btn-theme="btn-yellow" :onClick="viewPortfolio">See My Work</btn>
  </section>
</template>

<script>
import Btn from '@/components/btn.vue'

export default {
  name: 'home',
  components: {
    Btn
  },
  methods: {
    getInTouch() {
      this.$router.push('contact')
    },
    viewPortfolio() {
      this.$router.push('portfolio')
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  flex: 1 1 auto;
  position: relative;
  margin-right: -24px;
  margin-left: -24px;
  padding: 2.8rem 5.6rem;
  background: $cb-yellow;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -175px;
    right: 0;
    z-index: 100;
    width: 0;
    height: 0;
    border-right: 1500px solid transparent;
    border-bottom: 175px solid $cb-yellow;
    border-left: 0px solid transparent;
  }

  &::after {
    content: '';
    top: auto !important;
    right: auto !important;
    bottom: -175px;
    left: 0;
    border-top: 175px solid $cb-yellow;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent !important;
    border-left: 1500px solid transparent;
  }
}

.lead {
  font-size: $size-lg;
}
</style>
