<template>
  <div class="docs">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <h2>Vue Documentation</h2>

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'vue-docs',
  components: {
    HelloWorld
  }
}
</script>

<style scoped lang="scss">
.docs {
  padding: 0 16% 4% 12%;
  text-align: center;
}
</style>
