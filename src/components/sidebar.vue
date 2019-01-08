<template>
  <PoseTransition appear>
    <Sidebar class="sidebar">
      <section class="inner">
        <cb-brand />

        <sidebar-nav></sidebar-nav>
      </section>
      <!-- /.inner -->
    </Sidebar>
  </PoseTransition>
</template>

<script>
import posed, { PoseTransition } from 'vue-pose'
import CbBrand from '@/components/brand.vue'
import SidebarNav from '@/components/nav.vue'

export default {
  name: 'cb-sidebar',
  components: {
    PoseTransition,
    Sidebar: posed.header({
      enter: {
        opacity: 1,
        x: 0,
        beforeChildren: true,
        staggerChildren: 56,
        transition: { duration: 360, ease: 'easeIn' }
      },
      exit: {
        opacity: 0,
        x: '-100%',
        transition: { duration: 280, ease: 'easeIn' }
      }
    }),
    CbBrand,
    SidebarNav
  }
}
</script>

<style lang="scss">
.sidebar {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;
  padding: 0.67rem;
  background: $cb-blue;
  box-shadow: 8px 16px 0 $cb-red, 16px 36px 0 $cb-orange, 24px 56px 0 $cb-yellow;

  // MIN-width: 1140px
  @media screen and (min-width: 71.25em) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 20;
    width: 32%;
    padding: 2% 4%;
  }
}
</style>
