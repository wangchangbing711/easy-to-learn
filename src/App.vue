<template>
  <div id="app">
    <div style="height: 500px">
      <slide-video></slide-video>
      <slide-span></slide-span>
    </div>
    <toolbar></toolbar>
    <!--<player></player>-->
    <div id="card" >
         <card></card>
    </div>
  </div>
</template>

<script>
import slideVideo from './components/slidephoto/slidevideo'
import slidespan from './components/slidephoto/slidespan'
import toolbar from './components/toobar'
import player from './components/videolist/player'
import card from './components/card/card'

export default {
  name: 'app',
  components: {
     'slide-video': slideVideo,
      'slide-span':slidespan,
      'toolbar':toolbar,
      'player':player,
      'card':card
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
  #card{
    height: 1000px;
  }
</style>
