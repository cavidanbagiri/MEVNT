

<template>
    <div :class="toggle_value ? 'drop-open' : 'drop-close'"
        class="fixed top-10 right-0 bg-white px-3 py-3 shadow-lg z-10">
        <ul class="p-1">
            <li class="flex items-center mt-1 border border-orange-300 px-3 py-1 rounded-lg">
                <img v-if="prop?.user" :src="'http://localhost:3000/avatars/' + prop?.user?.profile_image"
                    class="w-10 h-10 border-2 rounded-full object-cover" alt="">
                <img v-else src="../../assets/avatars/default.png" class="w-10 h-10" alt="">
                <div class="flex flex-col mx-2">
                    <span class="font-bold text-lg">Cavidan Bagiri</span>
                    <span class="text-gray-500 text-md">{{ prop?.user?.email }}</span>
                </div>
            </li>
            <li class="flex items-center my-4 mx-1">
                <span><i class="fa-solid fa-gift fa-xl"></i></span>
                <div class="flex flex-col mx-2">
                    <span class="font-bold text-md px-4">Suggest Friends</span>
                    <span class="text-gray-500 text-md px-4 text-sm">Suggest friends and earn gift</span>
                </div>
            </li>
            <li v-if="!user" class="mx-1 ">
                <button class="hover:bg-gray-100 py-3 rounded-lg w-full text-start" @click="toggleLoginRegisterModal">
                    <span class="pl-1 pr-3"><i class="fa-solid fa-arrow-right-to-bracket fa-lg"></i></span>
                    <span class="px-4">Login or Register</span>
                </button>
            </li>
            <li class="mx-1">
                <button class="hover:bg-gray-100 py-3 rounded-lg w-full text-start">
                    <span class="pl-1 pr-3"><i class="fa-solid fa-wand-magic-sparkles fa-lg"></i></span>
                    <span class="px-4">Orders</span>
                </button>
            </li>
            <li class=" mx-1">
                <button class="hover:bg-gray-100 py-3 rounded-lg w-full text-start">
                    <span class="pl-1 pr-3"><i class="fa-solid fa-rotate-left  fa-lg"></i></span>
                    <span class="px-4">Refund</span>
                </button>
            </li>
            <li class=" mx-1">
                <button class="hover:bg-gray-100 py-3 rounded-lg w-full text-start">
                    <span class="pl-1 pr-3"><i class="fa-brands fa-cc-diners-club fa-lg"></i></span>
                    <span class="px-4">Coupon</span>
                </button>
            </li>
            <li class=" mx-1">
                <button class="hover:bg-gray-100 py-3 rounded-lg w-full text-start">
                    <span class="pl-1 pr-3"><i class="fa-solid fa-basket-shopping  fa-lg"></i></span>
                    <span class="px-4">Basket</span>
                </button>
            </li>
            <li class=" mx-1">
                <button class="hover:bg-gray-100 py-3 rounded-lg w-full text-start">
                    <span class="pl-1 pr-3"><i class="fa-regular fa-credit-card fa-lg"></i></span>
                    <span class="px-4">Cards</span>
                </button>
            </li>
            <li class=" mx-1">
                <button class="hover:bg-gray-100 py-3 rounded-lg w-full text-start">
                    <span class="pl-1 pr-3"><i class="fa-regular fa-heart  fa-lg"></i></span>
                    <span class="px-4">Favorites</span>
                </button>
            </li>
            <li class=" mx-1">
                <button class="hover:bg-gray-100 py-3 rounded-lg w-full text-start">
                    <span class="pl-1 pr-3"><i class="fa-regular fa-message fa-lg"></i></span>
                    <span class="px-4">Chat</span>
                </button>
            </li>
            <li class=" mx-1">
                <router-link :to="{ name: 'Settings' }">
                    <button class="hover:bg-gray-100 py-3 rounded-lg w-full text-start">
                        <span class="pl-1 pr-3"><i class="fa-solid fa-gear fa-lg"></i></span>
                        <span class="px-4">Settings</span>
                    </button>
                </router-link>
            </li>
            <li v-if="user" class=" mx-1">
                <button class="hover:bg-gray-100 py-3 rounded-lg w-full text-start" @click="logout">
                    <span class="pl-1 pr-3"><i class="fa-solid fa-right-from-bracket fa-lg"></i></span>
                    <span class="px-4">Logout</span>
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup>

import { computed } from 'vue';
import canvasChecking from '../../store';
import userStore from '../../store/user';
const store = canvasChecking();
const user_store = userStore();

//***************************************************** Open Or Close Login Register Modal *********************/
const toggleLoginRegisterModal = () => store.TOGGLELOGINREGISTERMODAL();
//*********************************************************************************************************/

//***************************************************** Logout Function */
const logout = () => {
    user_store.LOGOUTUSER();
}
//*********************************************************************************************************/

//***************************************************** Open Or Close DropDown Button *********************/
const prop = defineProps(['toggle_value', 'user'])
const toggle_value = computed(() => {
    return prop.toggle_value;
})
//*********************************************************************************************************/

</script>

<style scoped>
.drop-open {
    transform: translate3d(0, 0, 0);
    transition: 0.6s all ease;
}

.drop-close {
    transform: translate3d(0, -150%, 0);
    transition: 0.6s all ease;
}
</style>