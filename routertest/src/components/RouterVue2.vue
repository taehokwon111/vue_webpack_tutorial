<template>
    <div>
        <h1>Test3</h1>
    </div>
</template>

<script>
export default {
      beforeCreate() {
      console.log("test3_beforeCreate");
    },
    created() {
      console.log("test3_created");
    },
    beforeMount() {
      console.log("test3_beforeMount");
    },
    mounted() {
      console.log("test3_mounted")
    },
    beforeUpdate(){
      console.log("test3_beforeUpdate");
    },
    updated() {
      console.log("test3_updated");
    },
    beforeDestroy() {
      console.log("test3_beforeDestroy");
    },
    destroyed() {
      console.log("test3   _destroyed");
    }
}
</script>