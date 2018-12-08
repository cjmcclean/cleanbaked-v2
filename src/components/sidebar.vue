<template>
  <header class="sidebar">
    <section class="inner">
      <div class="brand">
        <img alt="Clean Baked Studios Pie" src="@/assets/logo-pie.png" />

        <h1 aria-label="Clean Baked Studios">
          <span class="logo-clean">Clean</span>&nbsp;&nbsp;<span
            class="logo-baked"
            >Baked</span
          ><br />
          <span class="logo-studio">Studios</span>
        </h1>
      </div>

      <sidebar-nav></sidebar-nav>
    </section>
    <!-- /.inner -->
  </header>
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
  background: $cb-blue;
  box-shadow: 8px 16px 0 $cb-red, 16px 36px 0 $cb-orange, 24px 56px 0 $cb-yellow;
}

.brand {
  img {
    position: relative;
    z-index: 10;
    transform: rotate(-12deg) translateX(-4px);
  }

  h1 {
    position: relative;
    z-index: 20;
    margin: 0;
    color: $cb-white;
    font-size: 24px;
    font-family: $leagueSpartan;
    text-transform: uppercase;
    transform: translateY(-44px);
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
    transform: skew(-2deg, 28deg);
  }

  .logo-baked {
    top: 0;
    font-size: 56px;
    font-family: $pacifico;
    text-transform: initial;
    transform: skew(-2deg, -28deg);
  }

  .logo-studio {
    display: inline-block;
    position: relative;
    letter-spacing: 2px;

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
