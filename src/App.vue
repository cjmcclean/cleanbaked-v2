<template>
  <div id="app">
    <sidebar />

    <main class="content"><router-view></router-view></main>

    <site-footer />
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar.vue'
import SiteFooter from '@/components/footer.vue'

export default {
  name: 'clean-baked',
  components: {
    Sidebar,
    SiteFooter
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Pacifico');

html,
body {
  min-height: 100%;
  height: auto;
}

body {
  margin: 0;
  font-size: 16px;
}

* {
  box-sizing: border-box;
}

#app {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: $cb-black;
  font-family: $lato;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;
  position: relative;
  z-index: 10;
  width: 68%;
  min-height: 100%;
  height: auto;
  margin-left: 32%;
  padding: 0 24px;
}
</style>
