
<template>
    <div>

        <input class="mr-2 w-5 h-5 text-blue-600 bg-yellow-300 rounded border-yellow-300  dark:ring-offset-yellow-300 focus:ring-2" 
        v-model="checked" @change="checkboxCond"
        type="checkbox">
        <span class="text-md">{{props.item}}</span>

    </div>
</template>

<script setup>

import { ref } from 'vue';

//Initialization All Must Be False
const checked = ref(false)

const props = defineProps(['item']);
const emit = defineEmits(['filterFunc', 'unFilterFunc']);

const checkboxCond = () => {
    if(checked.value){
        emit('filterFunc', props.item);
    }else{
        emit('unFilterFunc', props.item);
    }
    //checked.value ? emit('filterFunc', props.item) : emit('unFilterFunc', props.item);
}

</script>

<style lang="scss" scoped>

</style>
