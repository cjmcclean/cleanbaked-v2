<template>
  <div id="app">
    <router-view name="sidebar"></router-view>

    <router-view class="content" name="content"></router-view>
  </div>
</template>

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
  width: 68%;
  min-height: 100%;
  height: auto;
  margin-left: 32%;
}
</style>
