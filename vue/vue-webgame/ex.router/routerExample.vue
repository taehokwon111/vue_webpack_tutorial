<template>
  <div id="app">
  <h1> Test</h1>
      <p>
    <router-link to="/foo">Go to Test1</router-link>
    <router-link to="/bar">Go to Test2</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>

 
  export default {
    data() {
      return {
       
      };
    },
    computed: {
    username () {
      return this.$route.params.username
    }
    },
    methods: {
      goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
    };
</script>

<style scoped>
  #computer {
    width: 142px;
    height: 200px;
    background-position: 0 0;
  }
</style>
