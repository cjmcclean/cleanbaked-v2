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

html {
  font-size: 112.5%;
  line-height: 1.4;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;

  // nested rule(s)
  @media (min-width: 640px) {
    font-size: 125%;
    line-height: 1.4;
  }

  @media (min-width: 900px) {
    font-size: 131.25%;
  }

  @media (min-width: 1100px) {
    font-size: 137.5%;
  }
}

body {
  margin: 0;
}

* {
  box-sizing: border-box;
}

* + * {
  margin-top: 1.05rem;
}

a,
div,
li,
section,
span,
svg {
  margin-top: 0;
}

blockquote,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
li,
ol,
p,
pre,
ul {
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  padding-right: 0;
  padding-left: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $leagueSpartan;
}

h2 {
  font-size: $size-xxl;
  line-height: 1.15;

  // nested rule(s)
  * + & {
    margin-top: 2.1rem;
  }
}

h3 {
  font-size: $size-xl;

  // nested rule(s)
  * + & {
    margin-top: 2.1rem;
  }
}

h4 {
  font-size: $size-lg;
}

h5 {
  font-size: $size-mdl;
  text-transform: uppercase;
}

h6 {
  font-size: $size-sm;
  text-transform: uppercase;
  letter-spacing: 1px;
}

[disabled] {
  background: $cb-black-light !important;
  border-color: $cb-gray !important;
  color: $cb-gray !important;
  cursor: not-allowed !important;
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
  font-size: $size-reg;
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
  margin: 0 0 0 32%;
  padding: 0 24px;
  text-align: left;
}
</style>
