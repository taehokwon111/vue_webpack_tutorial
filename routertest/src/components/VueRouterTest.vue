<template>
    <div>
        <h1>Test2</h1>
    </div>
</template>

<script>
export default {
           beforeCreate() {
      console.log("test2_beforeCreate");
    },
    created() {
      console.log("test2_created");
    },
    beforeMount() {
      console.log("test2_beforeMount");
    },
    mounted() {
      console.log("test2_mounted")
    },
    beforeUpdate(){
      console.log("test2_beforeUpdate");
    },
    updated() {
      console.log("test2_updated");
    },
    beforeDestroy() {
      console.log("test2_beforeDestroy");
    },
    destroyed() {
      console.log("test2_destroyed");
    }
}
</script>