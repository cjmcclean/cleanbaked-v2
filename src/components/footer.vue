<template>
  <footer class="footer">
    Copyright &copy; {{ currentYear }} Clean Baked Studios <br />
    All Rights Reserved
  </footer>
</template>

<script>
export default {
  name: 'site-footer',
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
  position: fixed;
  bottom: 0;
  z-index: 30;
  width: 32%;
  padding: 2% 4%;
  color: $cb-gray-dark;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
