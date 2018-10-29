<template>
  <div id="app">
    <HeadLogo />
    <HeadNav />
    <div class="main">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeadLogo from './components/header/HeadLogo'
import HeadNav from './components/header/HeadNav'
export default {
  components: {
    HeadLogo, HeadNav
  }
}

// export default {
//   name: 'app',
// }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
