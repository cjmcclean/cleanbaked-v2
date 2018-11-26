<template>
  <div class="sidebar-nav" role="navigation">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: 'sidebar-nav'
}
</script>

<style lang="scss">
.sidebar-nav {
  a {
    display: block;
    padding: 8px 12px;
    color: $cb-ghostwhite;
    font-weight: bold;

    &.router-link-exact-active {
      color: $cb-white;
    }
  }
}
</style>
