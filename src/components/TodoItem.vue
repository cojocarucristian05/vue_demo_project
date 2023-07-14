<script setup>
import { ref, watch } from "vue";
import CustomButton from "./CustomButton.vue";

const props = defineProps({
    id: Number,
    title: String,
    completed: Boolean
})

const isCompleted = ref(props.completed);
const emits = defineEmits('toggleCompleted', 'deleteTodo', 'updateTodo')


watch(isCompleted, (newValue) => {
    emits('toggleCompleted', newValue, props.id);
});

function deleteTodo() {
    emits('deleteTodo', props.id);
}

function updateTodo() {
    emits('updateTodo', props.id);
}

</script>



<template>
    <div 
        class="todo-container"
        :class="{completed: isCompleted}"
    >
        <label 
            :for="`completed-checkbox-${id}`"
            class="title"
        >
            <input
                :id="`completed-checkbox-${id}`"
                v-model="isCompleted"
                type="checkbox"
            />
            {{ title }}
        </label>
        <div
            class="buttons"
        >
            <CustomButton 
                id="update-todo-button"
                label="Update"
                class="update-button"
                @click="updateTodo"
                style="background-color: yellow;"
            />
            <CustomButton 
                id="delete-todo-button"
                label="Delete"
                class="delete-button"
                @click="deleteTodo"
                style="background-color: red;"
            />
        </div>
        <!-- <span class="id">{{ id }}. </span>
        <span class="title"> {{ title }} </span> -->
    </div>
</template>



<style scoped>
.todo-container {
    width: 100%;
    padding: 10px;
    margin: 5px;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    background-color:white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: line;
}

.todo-container.completed {
    background-color: aquamarine;
};


/* .todo-container .delete-button {
    background-color: red;
} */
</style>