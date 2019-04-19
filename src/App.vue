<template>
  <div id="app">
    <slide-video></slide-video>
    <slide-span></slide-span>
  </div>
</template>

<script>
import slideVideo from './components/slidevideo'
import slidespan from './components/slidespan'

export default {
  name: 'app',
  components: {
     'slide-video': slideVideo,
      'slide-span':slidespan
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
}
</style>
