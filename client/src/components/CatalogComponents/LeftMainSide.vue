
<template>
    <div class="col-span-9  flex-col justify-start mt-3">

        <div class="flex flex-wrap justify-between">
            <template v-for="i in end" :key="i">
                <card-item v-if="i >= start && i <= end" :itemnum="i"></card-item>
            </template>
        </div>

        <!-- Pagination -->
        <PaginationComp @changePageNumber="changePage">

        </PaginationComp>


    </div>
</template>


<script setup>

import { ref } from 'vue';
import CardItem from '../CardItemTemp.vue';
import PaginationComp from './PaginationComp.vue';

//How Many Items Will Be In The Page
const pagination_each_page_item_size = 10;
//Start Pagination Number
const start = ref(0);
//Last Pagination Number
const end = ref(pagination_each_page_item_size);
const changePage = (num) => {
    start.value = (num * pagination_each_page_item_size) - (pagination_each_page_item_size-1);//6
    end.value = (num * pagination_each_page_item_size);//9
}

</script>











<style lang="scss" scoped>

</style>
