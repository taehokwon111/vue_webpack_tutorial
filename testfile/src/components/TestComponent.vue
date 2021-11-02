<template>
    <div>
        <p>{{name}}</p>
        <button @click="updateName">clickme</button>
    </div>
</template>


<script>
export default{
    data(){
        return {name:"balmostory"}
    },
        methods:{
        updateName(){
            this.name = "balmostory updated"
        }
    }
}
</script>


<style scoped>

</style>