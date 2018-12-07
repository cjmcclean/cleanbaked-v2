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
  margin-right: -24px;
  margin-left: -24px;
  padding: 2.8rem 5.6rem;
  background: $cb-yellow;
}

.lead {
  font-size: $size-lg;
}
</style>
