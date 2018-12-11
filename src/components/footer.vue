<template>
  <footer class="footer">
    Copyright &copy; {{ currentYear }} Clean Baked Studios <br />
    All Rights Reserved<br />
    <span class="attr"
      >&ldquo;Clean Baked Pie&rdquo; illustrated by Lauren Baker</span
    >
  </footer>
</template>

<script>
export default {
  name: 'cb-footer',
  data: function() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
.footer {
  display: block;
  width: 100%;
  padding: 0.67rem;
  background: $cb-blue;
  color: $cb-cream;
  font-size: 12px;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 1px;

  // MIN-width: 1140px
  @media screen and (min-width: 71.25em) {
    position: fixed;
    bottom: 0;
    z-index: 30;
    width: 32%;
    padding: 2% 4%;
    background: transparent;
    color: $cb-gray-dark;
  }
}

.attr {
  padding: 0 0.525rem;

  // MIN-width: 900px
  @media screen and (min-width: 56.25em) {
    padding: 0;
  }
}
</style>
