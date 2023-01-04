
<template>
    <div v-if="props.item">

        <input class="mr-2 w-4 h-4 text-blue-600 bg-yellow-300 rounded border-yellow-300  dark:ring-offset-yellow-300 focus:ring-2" 
        v-model="checked" @change="checkboxCond"
        type="checkbox">
        <span class="text-md">{{props.item}}</span>

    </div>
</template>

<script setup>

import { ref } from 'vue';

//Initialization All Must Be False
const checked = ref(false)

const props = defineProps(['item', 'filt_object']);
const emit = defineEmits(['filterFunc', 'unFilterFunc']);


const checkboxCond = () => {
    if(checked.value){
        emit('filterFunc', props.filt_object, props.item);
    }else{
        emit('unFilterFunc', props.filt_object, props.item);
    }
}

</script>

<style lang="scss" scoped>

</style>
