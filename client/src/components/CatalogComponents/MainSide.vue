
<template>
    <div class="col-span-9  flex-col justify-start mt-3">

        <div class="mx-2 my-5">
            <span class=" mx-3  text-blue-800 text-md hover:underline-offset-1 hover:underline hover:cursor-pointer " >sort by price</span> 
            <span class=" mx-3  text-blue-800 text-md hover:underline-offset-1 hover:underline hover:cursor-pointer " >sort by raiting</span>
            <span class=" mx-3  text-blue-800 text-md hover:underline-offset-1 hover:underline hover:cursor-pointer " >sort by discount</span>
        </div>

        <div class="flex flex-wrap justify-between">
            


            <template v-if="products.length">
                <div v-for="i in products" :key="i._id" >
                    <card-item :item="i"></card-item>
                </div>
            </template>
            <template v-else>
                <span>There is Any Data For Showing</span>
            </template>

        </div>

        <!-- Pagination -->
        <PaginationComp @changePageNumber="changePage">

        </PaginationComp>


    </div>
</template>


<script setup>

import { ref, computed, onMounted, watchEffect } from 'vue';
import PaginationComp from './PaginationComp.vue';
import CardItem from '../CardItemTemp.vue';
import productStore from '../../store/product'
const store = productStore();


//********************************************************* Fetch Documents ******************************************/
const products = ref([]);
//Show On Client Side
// const products = computed(() => {
//     return store.GETPRODUCTS;
// })

watchEffect(()=>{
    products.value = store.GETPRODUCTS;
})
//********************************************************************************************************************/



//********************************************************* Pagination Page ******************************************/
//How Many Items Will Be In The Page
const pagination_each_page_item_size = 10;
//Start Pagination Number
const start = ref(0);
//Last Pagination Number
const end = ref(pagination_each_page_item_size);
const changePage = (num) => {
    start.value = (num * pagination_each_page_item_size) - (pagination_each_page_item_size - 1);//6
    end.value = (num * pagination_each_page_item_size);//9
}
//********************************************************************************************************************/

</script>











<style lang="scss" scoped>

</style>
