<template>
  <section class="portfolio">
    <h2>This is a portfolio page</h2>

    <p>Portfolio words.</p>
  </section>
</template>

<script>
export default {
  name: 'portfolio'
}
</script>

<style scoped lang="scss">
.portfolio {
  flex: 1 1 auto;
  min-height: 100vh;
  margin-right: -24px;
  margin-left: -24px;
  padding: 2.8rem 5.6rem;
  background: $cb-blue;
  color: $cb-cream;
}
</style>
