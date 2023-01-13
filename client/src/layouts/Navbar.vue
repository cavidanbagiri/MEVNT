
<template>

    <div class="grid grid-cols-12 shadow-lg  bg-white top-0 z-10 py-2">
        <!-- Brand Name For SM -->
        <div class=" col-span-12 block lg:hidden text-center">
            <router-link to="/">
                <span class="text-2xl font-bold sm:block lg:hidden"><span class="text-3xl text-yellow-300">M</span>arket</span>
            </router-link>
        </div>
        <!-- Search For SM -->
        <div class="col-span-12 block lg:hidden text-center ">
            <input type="search" class="w-full border-solid h-full rounded-lg p-2 m-1  border-2 border-yellow-300 hover:opacity-70"
                placeholder="Search Products...">
        </div>
        <!-- Brand For LG --> 
        <div class=" col-span-2 lg:col-span-3 p-1 flex justify-around  items-center ">
            <router-link to="/" class="hover:shadow-xl">
                <span class="text-2xl font-bold hidden lg:block"><span class="text-3xl text-yellow-300">M</span>arket</span>
            </router-link>
            <!-- Navbar Button -->
            <button @click="toggleCatalog" @keyup.esc="closeCatalog" 
            class="text-md hidden lg:block font-bold bg-yellow-300 px-4 py-2 rounded-lg hover:opacity-70">
                <i v-if="!canvas_toggle"   class="fa-solid fa-bars"></i>
                <i v-else="canvas_toggle"  class="fa-solid fa-xmark"></i>
                Catalog
            </button>
            <button class="text-md block lg:hidden font-bold bg-yellow-300 px-2 py-1 rounded-lg">
                <i class="fa-solid fa-bars fa-xl"></i>
            </button>      
        </div>
        <!-- Search For LG -->
        <div class=" hidden lg:block lg:col-span-5 p-1">
            <input type="search" class="w-full border-solid h-full rounded-lg pl-3 border-2 border-yellow-300 hover:opacity-70"
                placeholder="Search Products...">
        </div>
        <!-- User Side For Any -->
        <div class="col-span-10 lg:col-span-4  flex items-center justify-around  mt-1">
            <div class="flex flex-col items-center justify-center">
                <span><i class="fa-brands fa-discourse fa-xl"></i></span>
                
                <span class="text-xs text-gray-400">Discount</span>
            </div>

            <div class="flex flex-col items-center justify-center">
                <span><i class="fa-brands fa-cc-diners-club fa-xl"></i></span>
                <span class="text-xs text-gray-400">Coupons</span>
            </div>


            <div class="flex flex-col items-center justify-center relative">
                <div v-if="user_store.GETFAVORITESSIZE" class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-2 ">
                    {{ user_store.GETFAVORITESSIZE }}
                </div>
                <span><i class="fa-regular fa-heart fa-xl"></i></span>
                <span class="text-xs text-gray-400">Favorites</span>
            </div>
            <div class="flex flex-col items-center justify-center relative">
                <div v-if="user_store.GETBASKETSIZE" class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-2 ">
                    {{ user_store.GETBASKETSIZE }}
                </div>
                <span><i class="fa-solid fa-cart-shopping fa-xl"></i></span>
                <span class="text-xs text-gray-400">Basket</span>
            </div>
            <div class="flex flex-col items-center justify-center " @click="openDropdown">
                <!-- <button ><span><i class="fa-solid fa-user fa-xl"></i></span></button> -->
                <img v-if="user" :src=" 'http://localhost:3000/avatars/' + user?.profile_image" 
                class="w-10 h-10 border-2 rounded-full object-cover hover:cursor-pointer"
                alt="">
                <img v-else src='../assets/avatars/default.png' 
                class="w-9 h-9 border-2 rounded-full object-cover hover:cursor-pointer"
                alt="">
                <button ><span class="text-xs text-gray-400">Profile</span></button>
            </div>
            <user-dropdown :toggle_value="dropdown_value" :user="user"></user-dropdown>
            
        </div>

    </div>

</template>

<script setup>

import { ref,computed } from 'vue';
import UserDropdown from '../components/UserComponents/UserDropdown.vue';
import userStore from '../store/user';
import canvasChecking from '../store';
const store = canvasChecking();
const user_store = userStore();
//********************************************** Show Hide Catalog **********************************************/

const user = ref();
user.value = JSON.parse(sessionStorage.getItem('user'));

const canvas_toggle = computed(()=> store.GETCANVASTOGGLE);

const toggleCatalog = () => store.CANVASTOGGLE();

const closeCatalog = () => store.canvas_toggle=false;
//***************************************************************************************************************/
const dropdown_value = computed(()=>{
    return store.GETUSERDROPDOWN
})
const openDropdown = () => {
    store.TOGGLEUSERDROPDOWN();
}

</script>

<style scoped>



</style>

