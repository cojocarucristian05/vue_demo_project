<script setup>
import {computed, onBeforeMount, onMounted, reactive, ref} from 'vue';

const props = defineProps({
    id: Number,
    label: String,
    disabled: Boolean
});

defineEmits(['click'])
</script>



<template>
    <button
        :id = "id"
        :disabled="disabled"
        @click="$emit('click')"
    >
        {{ label }}
    </button>
</template>



<style scoped>

</style>