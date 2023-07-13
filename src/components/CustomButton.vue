<script setup>
import {computed, onBeforeMount, onMounted, reactive, ref} from 'vue';

const props = defineProps({
    label: String,
    id: Number
});

const emits = defineEmits(['click']);

const buttonLabel = ref("Click me!");              //variabila reactiva
const buttonId = "btn1";
const isButtonDisabled = false;
const text = computed(() => isTextDisplayed ? "Text displayed" : "Text not displayed");
const isTextDisplayed = ref(true);
const fontSize = computed(() => isTextDisplayed ? 8 : 25);

const reactiveObject = reactive({
    title: "reactive object title"
});


function clickButton() {
    buttonLabel.value = "another button value";
    isTextDisplayed.value = !isTextDisplayed.value;
    emits('click', 10);
}

onBeforeMount(() => {
    console.log("on before mounted");
})

onMounted(() => {
    console.log("mounted");
})

</script>

<template>
    <div 
        class="container"
        :class="{'displayed': isTextDisplayed}"
    >
        <button
            :id="`buttonId-${buttonLabel}`"
            :disabled="isButtonDisabled"
            @click="clickButton()"
            > {{ buttonLabel }} 
        </button> <br>
        <span :style="{fontSize: fontSize + 'px'}"> {{ isTextDisplayed }} </span> <br>
        <span v-if="isTextDisplayed"> {{ text }} </span>
    </div>
</template>

<style scoped>
/* .container.displayed {
    border-width: 10px;
    border-style: dashed;
    padding: 100px;
} */
</style>