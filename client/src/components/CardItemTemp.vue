
<template>
    <div
        class="flex flex-col w-60 h-auto mt-2 hover:shadow-2xl mx-2 mb-10 hover:scale-105 hover:rounded-xl transition ease-in-out delay-150">
        <!-- <router-link to="/"> -->
        <div class="relative">
            <!-- <img class="h-64 w-full m-0 p-0" src="https://basket-08.wb.ru/vol1131/part113161/113161794/images/c246x328/1.jpg" alt=""> -->
            <img class="h-60 w-full m-0 p-0" :src="props.item.Thumbnail" alt="">
            <i v-if="selected_product_favorites" class="fa-regular fa-heart fa-xl absolute top-5 right-0 text-violet-600 hover:cursor-pointer"></i>
            <i v-else class="fa-regular fa-heart fa-xl absolute top-5 right-0 text-yellow-400 hover:cursor-pointer"
                @click="addFavorites"></i>
        </div>
        <div class="pl-2 my-1 flex  items-center">
            <span class="bg-red-500 ml-2 text-xs rounded-lg text-white font-bold px-2">%{{ props.item.Discount }}</span>
        </div>
        <div class="px-3 my-1 flex  items-center">
            <span class="font-bold text-md">{{ props.item.Price }} ₽</span> <span
                class="pl-3 text-sm text-gray-500">99990 ₽</span>
        </div>
        <div class="px-3 my-3 flex  items-center">
            <i class="fa-solid fa-star fa-sm" style="color:orange"></i>
            <i class="fa-solid fa-star fa-sm" style="color:orange"></i>
            <i class="fa-solid fa-star fa-sm" style="color:orange"></i>
            <i class="fa-solid fa-star fa-sm" style="color:orange"></i>
            <i class="fa-solid fa-star fa-sm" style="color:orange"></i>
        </div>
        <div class="px-3 my-1 flex text-md items-center">
            <span class="text-md text-slate-400"><span class="text-black">Brand</span> {{ props.item.Brand }} </span>
        </div>
        <div class="px-3 my-1 flex overflow-hidden h-12">
            <span class="text-sm text-slate-400 text-start"><span class="text-black">Model</span> {{
                props.item.Model
            }} </span>
        </div>
        <!-- <div v-if="user.basket.length">
            <div v-for="i in user.basket" class="my-2 flex  items-center justify-start px-3">
                <button disabled v-if="i === props.item._id " @click="addBasket"
                    class="bg-violet-600 text-white w-full py-2 rounded-md transition ease-in-out delay-100 ">
                    Added
                </button>
                <button v-else @click="addBasket"
                    class="bg-yellow-400 text-white w-full py-2 rounded-md transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 hover:opacity-50 hover:bg-yellow-400 duration-300">
                    Add Basket
                </button>
            </div>
        </div>
        <div v-else>
            <div class="my-2 flex  items-center justify-start px-3">
                <button @click="addBasket"
                    class="bg-yellow-400 text-white w-full py-2 rounded-md transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 hover:opacity-50 hover:bg-yellow-400 duration-300">
                    Add Basket
                </button>
            </div>
        </div> -->
        <div v-if="!selected_product_basket" class="my-2 flex  items-center justify-start px-3">
            <button @click="addBasket"
                class="bg-yellow-400 text-white w-full py-2 rounded-md transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 hover:opacity-50 hover:bg-yellow-400 duration-300">
                Add Basket
            </button>
        </div>
        <div v-else class="my-2 flex  items-center justify-start px-3">
            <button disabled @click="addBasket"
                class="bg-yellow-400 text-white w-full py-2 rounded-md transition ease-in-out delay-100 opacity-50">
                Added
            </button>
        </div>
        <!-- </router-link> -->
    </div>
</template>

<script setup>

import { ref, computed, watchEffect, nextTick } from 'vue';

import userStore from '../store/user';
const store = userStore();

// Get User From Storage
const user = ref();
user.value = JSON.parse(sessionStorage.getItem('user'));

//Create Value that, is there is basket or note;
let selected_product_basket = ref(false);
let selected_product_favorites = ref(false);

//Check for true or false
watchEffect(() => {
    for (let i of user.value.basket) {
        if (i === props.item._id) {
            selected_product_basket.value = true;
        }
    }
    for (let i of user.value.favorites) {
        if (i === props.item._id) {
            selected_product_favorites.value = true;
        }
    }
})
// Get Item From Parent
const props = defineProps(['item']);

// Add product to Basket
const addBasket = () => {
    store.addBasket(props.item);
    selected_product_basket.value = true;
}
// Add product to Favorites
const addFavorites = () => {
    store.addFavorite(props.item);
    selected_product_favorites.value = true;
}


</script>

<style lang="scss" scoped>

</style>

