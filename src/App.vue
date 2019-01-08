<template>
  <div id="app">
    <cb-sidebar />

    <main class="content"><router-view state=""></router-view></main>
    <cb-footer />
  </div>
</template>

<script>
import CbSidebar from '@/components/sidebar.vue'
import CbFooter from '@/components/footer.vue'

export default {
  name: 'clean-baked',
  components: {
    CbSidebar,
    CbFooter
  },
  watch: {
    // eslint-disable-next-line
    $route: function (to, from) {
      // eslint-disable-next-line
      console.log(to, from)
      // const toDepth = to.path.split('/').length
      // const fromDepth = from.path.split('/').length
      // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  created: function() {}
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

  // queries
  // MIN-width: 640px
  @media (min-width: 40em) {
    font-size: 125%;
    line-height: 1.4;
  }

  // MIN-width: 900px
  @media (min-width: 56.25em) {
    font-size: 131.25%;
  }

  // MIN-width: 1100px
  @media (min-width: 68.75em) {
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

dl,
ul,
ol {
  padding-left: 1.05rem;
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
  margin-top: 0.67em;
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
  font-size: $size-mdl;
}

h5 {
  font-size: $size-md;
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
  font-family: $lato;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  display: flex;
  overflow: hidden;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;
  position: relative;
  z-index: 10;
  min-height: 100%;
  height: auto;
  padding: 0 2.8rem;
  text-align: left;

  // MIN-width: 1140px
  @media screen and (min-width: 71.25em) {
    width: 68%;
    margin: 0 0 0 32%;
    padding: 0 24px;
  }
}
</style>
