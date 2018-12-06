<template>
  <section class="home">
    <h2>Hello there and welcome.</h2>

    <p class="lead">
      I'm a designer & front-end developer.<br />
      I build awesome websites tailored to your needs and goals.
    </p>
  </section>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped lang="scss">
.home {
  flex: 1 1 auto;
  margin-right: -24px;
  padding: 12% 16% 4% 12%;
  background: $cb-yellow;
}

.lead {
  font-size: $size-lg;
}
</style>
