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
      console.log("beforeCreate");
    },
    created() {
      console.log("created");
    },
    beforeMount() {
      console.log("beforeMount");
    },
    mounted() {
      this.int_a = 1;
      this.int_b = 2;
      console.log("mounted")
      this.$destroy;
    },
    beforeUpdate(){
      console.log("beforeUpdate");
    },
    updated() {
      console.log("updated");
    },
    beforeDestroy() {
      console.log("beforeDestroy");
    },
    destroyed() {
      console.log("destroyed");
    }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>
