<template>
  <div class="form-group"><slot /></div>
</template>

<script>
export default {
  name: 'form-group'
}
</script>

<style scoped lang="scss">
.form-group {
  display: block;
  position: relative;
  padding-top: 1.4rem;

  // nested rule(s)
  & + & {
    margin-top: 1.05rem;
  }
}
</style>
