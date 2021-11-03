<template>
    <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
      </span>
  </div>
</template>
<script>
export default {
   data: function (){
       return{
           newTodoItem: ""
       }
   },
   methods:{
       addTodo: function(){
           console.log(this.newTodoItem);
           localStorage.setItem(this.newTodoItem, this.newTodoItem);
           this.clearInput(); //비워주기(초기화)
       },
       clearInput: function(){
           this.newTodoItem = "";
       }
   }
}
</script>
<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

</style>