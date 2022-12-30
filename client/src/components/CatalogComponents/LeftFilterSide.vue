


<template>
    <div class="col-span-3  flex justify-start mt-3 h-screen p-2 ">

        <div class="flex flex-col items-center w-full">
            <span class="text-center text-2xl font-bold">Smartphones</span>

            <div class="w-full my-3 bg-white mx-2 p-1 ">
                <span class="font-bold mb-1  text-md p-2 bg-white">Price</span>
                <div class="flex flex-col lg:flex-row justify-between w-full ">
                    <input type="text" placeholder="min" class=" w-full m-2 border-2   p-2 rounded-lg">
                    <input type="text" placeholder="max" class=" w-full m-2 border-2   p-2 rounded-lg">
                </div>
            </div>

            <div class="w-full my-3 bg-white" v-for="(value, key) in filter">

                <div class="sticky top-0 bg-white">
                    <span class="font-bold mb-1 p-1 text-md bg-white">{{ key }}</span><br>
                    <input class="border w-full p-2 rounded-lg my-2  bg-white" placeholder="Search Brands"
                        @input="searchBrand">
                </div>
                <ul class="p-1  w-full  mx-2 max-h-72  overflow-auto scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-gray-200 ">
                    <li class=" p-1 flex items-center" v-for="i in value" :key="i">
                        <left-filter-side-item :item="i" @filterFunc="checkedFunc" @unFilterFunc="unCheckedFunc" />
                    </li>
                </ul>

            </div>

        </div>

    </div>
</template>

<script setup>

import { ref, computed } from 'vue';

import LeftFilterSideItem from './LeftFilterSideItem.vue';

import productStore from '../../store/product'
const store = productStore();

const filter = computed(() => {
    return store.GETFILTERS;
})

//************************************************* Phone Names Checked List **********************************************/
const checked_list = ref([]);
const checkedFunc = (name) => {
    checked_list.value.push(name);
    console.log('clicked', checked_list.value);
}
const unCheckedFunc = (name) => {
    console.log('unclicked', name);
}
//*************************************************************************************************************************/

//************************************************* Phone Names List *******************************************************/
const filtered_brands = ref([]);
const searchBrand = (els) => {
    if (filtered_brands.value.length === 0 && els.target.value.length === 0)
        filtered_brands.value = phone_name_list.value;
    else
        filtered_brands.value = phone_name_list.value.filter((item) => item.includes(els.target.value))
}
let phone_name_list = ref(['Apple', 'Samsung', 'Huawei', 'Xiaomi', 'Nokia', 'Realma', 'Asus', 'Blackberry', 'Alcatel', 'Acer', 'Google', 'Honor', 'Hisense', 'HOMTOM', 'Itel', 'HTC'])
filtered_brands.value = phone_name_list.value;
//*************************************************************************************************************************/

</script>

<style  scoped>

</style>