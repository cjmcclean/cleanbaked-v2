<template>
  <section class="sidebar" role="banner">
    <div class="brand">
      <img alt="Clean Baked Studios Pie" src="@/assets/logo-pie.png" />

      <h1>
        <span class="logo-clean">Clean</span>&nbsp;&nbsp;<span
          class="logo-baked"
          >Baked</span
        ><br />
        <span class="logo-studio">Studios</span>
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
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 32%;
  padding: 2% 4%;
  background: $cb-blue;
}

.brand {
  img {
    transform: rotate(-12deg) translateX(-2px);
  }

  h1 {
    margin-top: -44px;
    color: $cb-white;
    font-family: $leagueSpartan;
    text-transform: uppercase;
  }

  .logo-clean,
  .logo-baked {
    display: inline-block;
    position: relative;
    margin-bottom: 32px;
  }

  .logo-clean {
    margin-left: -16px;
    font-size: 52px;
    font-family: $blackoutMidnight;
    transform: skew(-2deg, 24deg);
  }

  .logo-baked {
    top: 4px;
    font-size: 56px;
    font-family: $pacifico;
    text-transform: initial;
    transform: skew(2deg, -24deg);
  }

  .logo-studio {
    display: inline-block;
    position: relative;

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: -92px;
      width: 72px;
      height: 1px;
      margin-top: -4px;
      background: $cb-white;
    }

    &::after {
      right: -92px;
      left: auto;
    }
  }
}
</style>
