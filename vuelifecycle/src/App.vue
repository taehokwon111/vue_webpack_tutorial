<template>
  <div id="app">
    <router-link to="/test1">Test1</router-link>
    <router-link to="/test2">Test2</router-link>
    <router-link to="/test3">Test3</router-link>
    
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import route from './router.js'

export default {
  name: 'App',
  components: {
    HelloWorld,
    route
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
