<template>
  <div id="app">
    <router-view name="sidebar"></router-view>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Modak');

body {
  margin: 0;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $cb-black;
}
</style>
