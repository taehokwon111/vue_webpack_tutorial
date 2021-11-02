<template>


  <div id="app">
  <h1>Vue_Router_Test</h1>
    <router-link to="/test1">Test1</router-link>
    <router-link to="/test2">Test2</router-link>
    <router-link to="/test3">Test3</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import router from './routes'

export default {
      router
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
