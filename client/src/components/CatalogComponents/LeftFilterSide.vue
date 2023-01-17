
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
                <!-- Search Filter -->
                <div class="sticky top-0 bg-white">
                    <span class="font-bold mb-1 p-1 text-md bg-white">{{ key }}</span><br>
                    <input v-if="key === 'Brand'" class="border w-full p-2 rounded-lg my-2  bg-white"
                        placeholder="Search Brands" @input="searchBrand">
                </div>

                <!-- Brand and Check Filter -->
                <ul v-if="key === 'Brand'"
                    class="p-1  w-full  mx-2 max-h-72  overflow-auto scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-gray-200 ">
                    <li class=" p-1 flex items-center" v-for="i in filtered_brands" :key="i">
                        <left-filter-side-item :item="i" :filt_object="key" @filterFunc="checkedFunc"
                            @unFilterFunc="unCheckedFunc" />
                    </li>
                </ul>

                <!-- Colors Section -->
                <!-- <div v-else-if="key === 'Colors'"
                    class="p-1  w-full flex flex-wrap  mx-2 max-h-72  overflow-auto scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-gray-200 ">
                    <div v-for="name in names" class="flex flex-wrap">
                        <template v-for="i in value">
                            <div v-if="i === name" :style="{ 'background-color': i }"
                                class=" border-2 border-black m-1 p-5 rounded-full flex flex-wrap">
                            </div>
                        </template>
                    </div>
                </div> -->

                <!-- Others Section -->
                <ul v-else
                    class="p-1  w-full  mx-2 max-h-72  overflow-auto scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-gray-200 ">
                    <li class=" p-1 flex items-center" v-for="i in value" :key="i">
                        <left-filter-side-item :item="i" :filt_object="key" @filterFunc="checkedFunc"
                            @unFilterFunc="unCheckedFunc" />
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import LeftFilterSideItem from './LeftFilterSideItem.vue';
import productStore from '../../store/product'
import names from '../../constants/colors';

const store = productStore();





//************************************************* Phone Names Checked List **********************************************/
const checked_list = ref([]);
const checkedFunc = (filt_object, item) => {
    let url = {};
    url[filt_object] = item;
    checked_list.value.push(url);
    console.log('after delay work');
    store.FETCHPRODUCTWITHFILTEROBJECT(checked_list);

}
const unCheckedFunc = (filt_object, item) => {
    let temp_arr = [];
    for (let i in checked_list.value) {
        for (let [key, value] of Object.entries(checked_list.value[i])) {
            if (key === filt_object && value === item) {
                continue;
            }
            else {
                temp_arr.push(checked_list.value[i]);
            }
        }
    }
    checked_list.value = temp_arr;
    store.FETCHPRODUCTWITHFILTEROBJECT(checked_list);
}
//*************************************************************************************************************************/

const filter = ref([]);

const brands = ref([]);
const filtered_brands = ref([]);

watchEffect(() => {
    filter.value = store.GETFILTERS;
    filtered_brands.value = filter.value.Brand;
    brands.value = filter.value.Brand
})

const searchBrand = (el) => {
    filtered_brands.value = brands.value;
    filtered_brands.value = filtered_brands.value.filter((item) => item.includes(el.target.value));
}



</script>

<style  scoped>

</style>