<template>
  <div>
    <h1>this is Home page</h1>
    <p>{{names}}</p>
    <button v-on:click="dateupdate()">click</button>
    <h1><a href="https://kr.vuejs.org/v2/guide/instance.html">About</a></h1>
  </div>
</template>

<script>
export default{
  data(){
   return{
     names:"balmostory"
    }
  },
  beforeCreate(){
    console.log("beforeCreate",this.names)
  },
  created(){
    console.log("created",this.names)
  },
  beforeMount(){
    alert("beforeMount")
  }
  ,
  mounted(){
    alert("mounted")
  },
  beforeUpdate(){
    alert("beforeUpdate")
  },
  updated(){
    alert("updated")
  },
  beforeDestroy(){
    alert("beforeDestroy")
  },
  destroyed(){
    alert("destroyed")
  },
  methods:{
    dateupdate(){
      this.names="hihihi";
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
