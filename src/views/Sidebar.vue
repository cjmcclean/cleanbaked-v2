<template>
  <section class="sidebar" role="banner">
    <div class="brand">
      <img alt="Clean Baked Studios Pie" src="@/assets/logo-pie.png" />

      <h1>
        Clean Baked<br />
        Studios
      </h1>
    </div>

    <sidebar-nav></sidebar-nav>
  </section>
</template>

<script>
import SidebarNav from '@/components/nav.vue'

export default {
  name: 'sidebar',
  components: {
    SidebarNav
  }
}
</script>

<style lang="scss">
.sidebar {
  position: fixed;
  top: 0;
  left: 12%;
  width: 200px;
  padding: 20px 12px;
  background: $wc-blue;

  &:after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: -50px;
    left: 0;
    width: 0;
    height: 0;
    border-top: 50px solid $wc-blue;
    border-right: 100px solid transparent;
    border-left: 100px solid transparent;
  }
}

.brand {
  h1 {
    color: $cb-white;
    text-transform: uppercase;
  }
}
</style>
