<template>
    <div class="title">
        <p class="title__message">{{ message }}</p>
        <p class="title__task">
            You've got
            <span class="title__task-total"> {{ task.total }} </span> tasks today.
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '안녕!',
            taskTotal: 5
        }
        
    },
}
</script>