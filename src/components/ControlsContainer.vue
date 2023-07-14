<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import CustomButton from './CustomButton.vue';

defineProps({
    deleteAllTodosButton: Boolean
});

const emits = defineEmits(['addTodo', 'deleteAll', 'showCompleted', 'loadExternalData']);

const todoText = ref("");
const isAddButtonDisabled = computed(() => todoText.value ? false : true);
const inputRef = ref(null);

const showCompleted = ref(false);

function togglCompleter() {
    emits('showCompleted', showCompleted.value);
}

watch(showCompleted, (newValue) => {
    if (newValue) {
        emits('showCompleted', true);
    } else  {
        emits('showCompleted', false);
    }
})

function addTodo() {
    const newTodo = {
        title: todoText.value,
        completed: false,
    }
    emits('addTodo', newTodo);
}

function deleteAll() {
    emits('deleteAll');
}

onMounted(() => {
    if(inputRef.value) {
        inputRef.value.focus();
    }
})



</script>



<template>
    <div class="controls-container">
        <input
            ref="inputRef"
            v-model="todoText"
            class="input"
            @keydown.enter="addTodo"
        />
        <CustomButton 
            id="add-todo-button"
            label="Add"
            class="add-button"
            :disabled="false"
            @click="addTodo"
        />
        <CustomButton 
            id="delete-all-todos-button"
            label="Delete All"
            class="delete-all-button"
            :disabled="deleteAllTodosButton"
            @click="deleteAll"
        />
        <label for="show-completed-checkbox">
            <input
                id="show-completed-checkbox"
                v-model="showCompleted"
                type="checkbox"
            />
            Show completed
        </label>
        <CustomButton
            id="load-data"
            label="Load external data"
            class="load-data-button"
            @click="$emit('loadExternalData')"
        />
    </div>    
</template>



<style scoped>
.controls-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.add-button {
    background-color: green;
}
.delete-all-button {
    background-color: red;
}
.input {
    border-color: orange;
}

.load-data-button {
    background-color: green;
}

</style>