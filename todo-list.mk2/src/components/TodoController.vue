<template>
  <div class="controller">
    <button class="clear" v-on:click="clearTodo">Clear All</button>
  </div>
</template>
 
<script>
export default {
  methods: {
    clearTodo() {
      localStorage.clear();
    }
  }
};
</script>