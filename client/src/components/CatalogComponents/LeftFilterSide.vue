


<template>
    <div class="col-span-3  flex justify-start mt-3 h-screen p-2 ">

        <div class="flex flex-col items-center w-full">
            <span class="text-center text-2xl font-bold">Smartphones</span>


            <ul class="p-1  w-full m-2 h-72 overflow-auto ">
                <span class="font-bold mb-1 p-1 text-xl">Brands</span><br>
                <input class="border w-full p-2 rounded-lg my-2" placeholder="Search Brands" @input="searchBrand">
                <li class=" p-1 flex items-center" v-for="i in filtered_brands" :key="i">
                    <left-filter-side-item :item="i" 
                    @filterFunc="checkedFunc"
                    @unFilterFunc="unCheckedFunc"
                    />
                </li>
            </ul>

            <div class="flex flex-col lg:flex-row justify-around  ">
                <input type="text" placeholder="min" class=" w-24 m-2 border   p-2 rounded-lg" >
                <input type="text" placeholder="max" class=" w-24 m-2 border   p-2 rounded-lg" >
            </div>

        </div>

    </div>
</template>

<script setup>

import { ref } from 'vue';
import LeftFilterSideItem from './LeftFilterSideItem.vue';


//************************************************* Phone Names Checked List **********************************************/
const checked_list = ref([]);
const checkedFunc = (name) => {
    checked_list.value.push(name);
    console.log('clicked',checked_list.value);
}
const unCheckedFunc = (name) => {
    console.log('unclicked',name);
}
//*************************************************************************************************************************/

//************************************************* Phone Names List *******************************************************/
const filtered_brands = ref([]);
const searchBrand = (els) => {
    if(filtered_brands.value.length === 0 && els.target.value.length ===0 )
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