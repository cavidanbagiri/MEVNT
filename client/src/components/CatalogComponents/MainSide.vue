
<template>
    <div class="col-span-9  flex-col justify-start mt-3">

        <div class="mx-2 my-5">
            <span @click="sortByPrice" class=" text-sm font-bold mx-3  text-blue-800 text-md hover:underline-offset-1 hover:underline hover:cursor-pointer " >sort by price</span> 
            <span @click="sortByRaiting" class=" text-sm font-bold mx-3  text-blue-800 text-md hover:underline-offset-1 hover:underline hover:cursor-pointer " >sort by raiting</span>
            <span @click="sortByDiscount" class=" text-sm font-bold mx-3  text-blue-800 text-md hover:underline-offset-1 hover:underline hover:cursor-pointer " >sort by discount</span>
        </div>

        <div class="flex flex-wrap justify-between">
            
            <template v-if="products.length">
                <div v-for="(i, index) in products" :key="i._id">
                    <card-item v-if="(index >= start && index<=end)" :index="index" :item="i"></card-item>
                </div>
            </template>
            <template v-else>
                <span>There is Any Data For Showing</span>
            </template>

        </div>

        <!-- Pagination -->
        <PaginationComp @changePageNumber="changePage" :product="products">

        </PaginationComp>


    </div>
</template>


<script setup>

import { ref, computed, onMounted, watchEffect } from 'vue';
import PaginationComp from './PaginationComp.vue';
import CardItem from '../CardItemTemp.vue';
import productStore from '../../store/product'
const store = productStore();


//********************************************************* Sort Documents ******************************************/
const sortByPrice = () => {
    temp = products.value.sort((a,b)=>(a.Price > b.Price) ? 1 : -1 );
}
const sortByRaiting = () => {
    temp = products.value.sort((a,b)=>(a.Raiting > b.Raiting) ? 1 : -1 );
}
const sortByDiscount = () => {
    temp = products.value.sort((a,b)=>(a.Discount > b.Discount) ? 1 : -1 );
}
//********************************************************************************************************************/

//********************************************************* Fetch Documents ******************************************/
const products = ref([]);
watchEffect(()=>{
    products.value = store.GETPRODUCTS;
})
//********************************************************************************************************************/



//********************************************************* Pagination Page ******************************************/
//How Many Items Will Be In The Page
const pagination_each_page_item_size = 25;
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
