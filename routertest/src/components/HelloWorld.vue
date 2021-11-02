<template>
  <div class="hello">
    <h1>hello</h1>
      <h1 id="result">{{plus()}}</h1>
  </div>
</template>

<script>
export default {
 
  data() {
      return {
        int_a: null,
        int_b: null,
        total: 0
      };
    },
    component: {
   
    },
    methods: {
      plus(a, b){
        a = this.int_a;
        b = this.int_b;

        return a + b;

      },
    },
    beforeCreate() {
      console.log("test1_beforeCreate");
    },
    created() {
      console.log("test1_created");
    },
    beforeMount() {
      console.log("test1_beforeMount");
    },
    mounted() {
      this.int_a = 1;
      this.int_b = 2;
      console.log("test1_mounted")
      this.$destroy;
    },
    beforeUpdate(){
      console.log("test1_beforeUpdate");
    },
    updated() {
      console.log("test1_updated");
    },
    beforeDestroy() {
      console.log("test1_beforeDestroy");
    },
    destroyed() {
      console.log("test1_destroyed");
    }

} 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>
