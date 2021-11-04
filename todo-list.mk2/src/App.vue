<template>
  <div id="app">
    <TodoHeader/>
     <TodoTitle />
    <TodoInput />
    <TodoController />
    <TodoList v-bind:propsdata="todoItems" />
    <TodoFooter />
  </div>
</template>

<script>
	
import TodoHeader from "./components/TodoHeader.vue";
import TodoTitle from "./components/TodoTitle.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoController from "./components/TodoController.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
 
export default {
   data() {
    return {
      todoItems: []
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
 name: "App",
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoList,
    TodoFooter
  }
};
</script>

<style>

</style>
