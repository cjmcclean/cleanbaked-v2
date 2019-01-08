<template>
  <PoseTransition appear mode="out-in">
    <route-section class="home">
      <h2>Hello there and welcome.</h2>

      <p class="lead">
        I'm a UI/UX designer & developer.<br />
        I build awesome, highly-functional websites and apps tailored to your
        business&rsquo; needs and goals.
      </p>

      <cb-btn btn-theme="btn-blue" :onClick="getInTouch">
        Let&rsquo;s Start a Conversation
      </cb-btn>

      <cb-btn btn-theme="btn-yellow" :onClick="viewPortfolio">
        See My Work
      </cb-btn>
    </route-section>
  </PoseTransition>
</template>

<script>
import posed, { PoseTransition } from 'vue-pose'
import CbBtn from '@/components/btn.vue'

export default {
  name: 'home',
  components: {
    CbBtn,
    PoseTransition,
    RouteSection: posed.section({
      enter: {
        opacity: 1,
        y: 0,
        beforeChildren: true,
        transition: { duration: 420, delay: 0, ease: 'easeInOut' }
      },
      exit: {
        opacity: 0,
        y: '100%',
        transition: { duration: 240, ease: 'easeInOut' }
      }
    })
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
  min-height: 72vh;
  max-height: 80vh;
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
