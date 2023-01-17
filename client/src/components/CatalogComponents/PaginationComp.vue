
<template>
    <div class="my-10  flex justify-start">
        <ul class="flex ">
            <li v-for="i in pageSize" class="">
                <button :class="{cavidan: i === pagination_page }" class=" w-9 h-9 rounded-full
                 hover:text-white anim" @click="changePage(i)">
                    {{i}}
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup>
    
    import { ref, watchEffect } from 'vue';
    //Changing Active Class Condition Value
    const pagination_page = ref(1);
    //Emit When Pagination Number Clicked Create Emit
    const emit = defineEmits(['changePageNumber']);
    //Getting Product For Pagination
    const props = defineProps(['product']);
    //Emit When Pagination Number Clicked Calling Emit
    const changePage = (item) => {
        pagination_page.value = item
        emit('changePageNumber',item);
    }
    //Get Page Size For Stepping
    const pageSize = ref(0);
    watchEffect(()=>{
        pageSize.value = Math.ceil(props.product.length/25);
    })

</script>

<style scoped>

.anim:hover{
    transition: 200ms;
    font-size: 20px;
    font-weight: bold;
    background-color: rgb(253 224 71);
}

.cavidan{
    background-color: rgb(253 224 71);
}

</style>
