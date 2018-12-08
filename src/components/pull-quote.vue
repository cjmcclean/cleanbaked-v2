<template>
  <aside class="pull-quote" role="note">
    <p><slot /></p>
  </aside>
</template>

<script>
export default {
  name: 'pull-quote'
}
</script>

<style scoped lang="scss">
.pull-quote {
  margin-right: -1.05rem;
  padding: 2.8rem 1.05rem 2.8rem 2.8rem;

  & > p {
    margin-top: 1.05rem;
    font-style: italic;
    font-size: $size-lg;
    line-height: 1.4;
    font-family: $pacifico;
    transform: rotate(-2deg);
  }
}
</style>
