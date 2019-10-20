<template>
  <div id="app">
    <img src="./assets/logo.png">
    <list></list>
    <router-view/>
  </div>
</template>

<script>
import List from './components/list'
export default {
  name: 'App',
  components: {
    list: List
  }
}
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
