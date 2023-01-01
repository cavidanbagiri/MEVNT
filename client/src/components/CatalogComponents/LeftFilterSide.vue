


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

                <!-- <ul v-if="filtered_brands.length===0">
                    <li v-for="i in brands">
                        {{ i }}
                    </li>
                </ul>
                <ul v-else>
                    <li v-for="i in filtered_brands">
                        {{ i }}
                    </li>
                </ul> -->

            <div class="w-full my-3 bg-white" v-for="(value, key) in filter">
                <!-- Search Filter -->
                <div class="sticky top-0 bg-white">
                    <span class="font-bold mb-1 p-1 text-md bg-white">{{ key }}</span><br>
                    <input v-if="key === 'Brand'" class="border w-full p-2 rounded-lg my-2  bg-white"
                        placeholder="Search Brands" @input="searchBrand">
                </div>
                <!-- Check Filter -->
                <ul v-if="key==='Brand'"
                    class="p-1  w-full  mx-2 max-h-72  overflow-auto scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-gray-200 ">
                    <li class=" p-1 flex items-center" v-for="i in filtered_brands" :key="i">
                        <left-filter-side-item :item="i" @filterFunc="checkedFunc" @unFilterFunc="unCheckedFunc" />
                    </li>
                </ul>

                <ul v-else
                    class="p-1  w-full  mx-2 max-h-72  overflow-auto scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-gray-200 ">
                    <li class=" p-1 flex items-center" v-for="i in value" :key="i">
                        <left-filter-side-item :item="i" @filterFunc="checkedFunc" @unFilterFunc="unCheckedFunc" />
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import LeftFilterSideItem from './LeftFilterSideItem.vue';
import productStore from '../../store/product'
const store = productStore();
const filter = computed(() => store.GETFILTERS)
// const filtered_brands = ref([]);
const filtered_brands = ref([]);
const brands = computed(() => {
    return filter.value.Brand;
});
const searchBrand = (el) => {
        filtered_brands.value = brands.value;
        filtered_brands.value = filtered_brands.value.filter((item) => item.includes(el.target.value));
}



//************************************************* Phone Names Checked List **********************************************/
const checked_list = ref([]);
const checkedFunc = (name) => { checked_list.value.push(name); }
const unCheckedFunc = (name) => console.log('unclicked', name);
//*************************************************************************************************************************/


</script>

<style  scoped>

</style>