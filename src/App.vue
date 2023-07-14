<script setup>
import TodoList from './components/TodoList.vue';
import ControlsContainer from './components/ControlsContainer.vue';
import { computed, ref, ssrContextKey } from 'vue';

import { addTodoPost, updateTodoUpdate, loadData, loadExternalData } from './data/loaddata';

const todos = ref(loadData());

const isDeleteAllButtonDisabled = computed(() => todos.length === 0);
const showCompleted = ref(false);
const todosFiltered = computed(() => showCompleted.value ? todos.value.filter((todo) => todo.completed) : todos.value)

async function addTodo(newTodo) {
    const addedTodo = await addTodoPost();
    todos.value.push(addedTodo);
    console.log(addedTodo);
}

function deleteAll() {
  todos.value = [];
}

function toggleCompleted(shouldDisplayCompleted) {
  showCompleted.value = shouldDisplayCompleted;
}

function updateTodo(newCompletedState, todoId) {
  const updatedTodo = todos.value.find(todo => todo.id === todoId);
  updatedTodo.completed = newCompletedState;
}

function updateTodo2(todoId) {  
  const updatedTodo = todos.value.find(todo => todo.id === todoId);
  updateTodo
}

function deleteTodo(todoId) {
  todos.value = todos.value.filter(todo => todo.id !== todoId);
}

async function onLoadExternalData() {
  todos.value = [];
  const newTodos = await loadExternalData();
  if(newTodos.length > 0) {
    todos.value = [...newTodos];
  }
}

</script>

<template>
  <div class="todo-app-container">
    <h1>Todo List</h1>
    <div> 
      <ControlsContainer
        :delete-all-todos-button="isDeleteAllButtonDisabled"
        @add-todo="addTodo"
        @delete-all="deleteAll"
        @show-completed="toggleCompleted"
        @load-external-data="onLoadExternalData"
      />
      <TodoList
        :todos="todosFiltered"
        @update-todo="updateTodo"
        @delete-todo="deleteTodo"
      />
    </div>
  </div>
</template>
<style scoped>

body {
  height: 100vh;
  width: 100vw;
}

.todo-app-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

</style>
