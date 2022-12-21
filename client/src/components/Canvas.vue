<template>
    <div :class="getval ? 'canvas_open' : 'canvas_close' " 
    class="w-9/12 h-auto grid grid-cols-12 z-20 absolute top-14 left-0 gap-1 bg-white" 
        
    >
        <div class="col-span-3  flex flex-col justify-start h-screen mr-3 ">
            <p class="text-xl font-bold pl-1 lg:pl-5 mt-2">Catalog</p>
            <ul class="pl-1 lg:pl-5 mt-3  overflow-auto ">
                <router-link to="/">
                    <li class="my-1 text-black py-1 text-md hover:bg-yellow-100" 
                    @click="defineToggleEmits" @mouseover="mouseHover"
                        @mouseleave="mouseLeave" v-for="i in catalog">
                        {{ Object.keys(i)[0] }}
                    </li>
                </router-link>
            </ul>
        </div>
        <div class="col-span-9">
            <ul>
                <li v-for="i in catalog_items" :key="i">
                    {{ i }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>

import { ref, computed } from 'vue';
import canvasChecking from '../store';

//******************************************** Animation Catalog **********************************************/
const store = canvasChecking();

const prop = defineProps(['toggle_value']);
const getval = computed(()=>{
    return store.canvas_toggle;
})
//************************************************************************************************************/



//********************************************** Select Catalog **********************************************/
const catalog = [
    { 'Smartphones': ['IPhone', 'Samsung', 'Huawei', 'Nokia', 'Xiaomi'] },
    { 'Books': ['Darvin', 'Pamuk', 'Fidel', 'Hitler', 'Quran'] },
    { 'Electronics': ['IPhone', 'Samsung', 'Huawei', 'Nokia', 'Xiaomi'] },
    { 'Notebooks': ['IPhone', 'Samsung', 'Huawei', 'Nokia', 'Xiaomi'] },
    { 'Make Up': ['IPhone', 'Samsung', 'Huawei', 'Nokia', 'Xiaomi'] },
    { 'Home': ['IPhone', 'Samsung', 'Huawei', 'Nokia', 'Xiaomi'] },
    { 'Decorations': ['IPhone', 'Samsung', 'Huawei', 'Nokia', 'Xiaomi'] },
    { 'Clothes': ['IPhone', 'Samsung', 'Huawei', 'Nokia', 'Xiaomi'] },
    { 'Sports': ['IPhone', 'Samsung', 'Huawei', 'Nokia', 'Xiaomi'] },
    { 'Furnitures': ['IPhone', 'Samsung', 'Huawei', 'Nokia', 'Xiaomi'] },
    { 'Pharmacy': ['IPhone', 'Samsung', 'Huawei', 'Nokia', 'Xiaomi'] },
    { 'Hobby': ['IPhone', 'Samsung', 'Huawei', 'Nokia', 'Xiaomi'] },
    { 'Design': ['IPhone', 'Samsung', 'Huawei', 'Nokia', 'Xiaomi'] },
    { 'Software': ['IPhone', 'Samsung', 'Huawei', 'Nokia', 'Xiaomi'] },
    { 'Cars': ['IPhone', 'Samsung', 'Huawei', 'Nokia', 'Xiaomi'] },
    { 'Kitchens': ['IPhone', 'Samsung', 'Huawei', 'Nokia', 'Xiaomi'] },
    { 'Woman': ['IPhone', 'Samsung', 'Huawei', 'Nokia', 'Xiaomi'] },
    { 'Parfumery': ['IPhone', 'Samsung', 'Huawei', 'Nokia', 'Xiaomi'] },
    { 'Idea': ['IPhone', 'Samsung', 'Huawei', 'Nokia', 'Xiaomi'] },
    { 'Man': ['IPhone', 'Samsung', 'Huawei', 'Nokia', 'Xiaomi'] },
    { 'Child': ['IPhone', 'Samsung', 'Huawei', 'Nokia', 'Xiaomi'] },
]
const hoverText = ref('');
const catalog_items = ref([]);
const mouseHover = (item) => {
    hoverText.value = item.target.innerText;
    for (let i of catalog) {
        if (Object.keys(i)[0] === item.target.innerText)
            catalog_items.value = i[item.target.innerText];
    }
}
//************************************************************************************************************/

</script>

<style scoped>
.canvas_open {
    transform: translate3d(0,0,0);
    transition: 0.6s all ease;
}

.canvas_close {
    transform: translate3d(-100%,0,0);
    transition: 0.6s all ease;
    
}




</style>




