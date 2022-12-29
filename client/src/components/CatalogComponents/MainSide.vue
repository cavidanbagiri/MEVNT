
<template>
    <div class="col-span-9  flex-col justify-start mt-3">

        <div class="flex flex-wrap justify-between">
            <!-- <template v-for="i in end" :key="i">
                <card-item v-if="i >= start && i <= end" :itemnum="i"></card-item>
            </template> -->

            <template v-if="product.length">
                <div v-for="i in product" :key="i._id">
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

import { ref, computed, onMounted } from 'vue';
import PaginationComp from './PaginationComp.vue';
import CardItem from '../CardItemTemp.vue';
import productStore from '../../store/product'
const store = productStore();

//********************************************************* Creating Props ******************************************/
const props = defineProps(['category_name']);
console.log('prop is : ', props.category_name);
//********************************************************************************************************************/

//********************************************************* Fetch Documents ******************************************/
//Get All Data
onMounted(async () => {
    await store.FETCHPRODUCTS(props.category_name);
})
//Show On Client Side
const product = computed(() => {
    return store.GETPRODUCTS;
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
