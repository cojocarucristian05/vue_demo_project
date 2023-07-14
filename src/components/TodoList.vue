<script setup>
import ControlsContainer from './ControlsContainer.vue';
import TodoItem from './TodoItem.vue';

defineProps({
    todos: Array
})

const emits = defineEmits(['update-todo', 'deleteTodo']);

function updateTodo(newCompletedState, todoId) {
    emits('update-todo', newCompletedState, todoId);
}

function deleteTodo(todoId) {
    emits('deleteTodo', todoId);    
}

function updateTodo(todoId) {
    emits('updateTodo', todoId);
}

</script>



<template>
    <div class="todo-list-container">
        <TodoItem
            v-for="todo in todos"
            :key="todo.id"
            :id="todo.id"
            :title="todo.title"
            :completed="todo.completed"
            @toggle-completed="updateTodo"
            @delete-todo="deleteTodo"
        />
    </div>  
</template>



<style scoped>
.todo-list-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
}
</style>