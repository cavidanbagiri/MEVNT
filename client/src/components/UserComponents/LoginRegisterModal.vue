
<template>
    <div v-show="login_register_modal_toggle" class="absolute top-0 left-0 z-40 w-screen h-screen flex flex-col items-center justify-center"
        style="background-color: rgba(0,0,0,0.5);">
        <div class="flex flex-col items-center justify-center w-1/4 bg-white rounded-xl relative">
            <div class="w-full mb-5">
                <button @click="user_store.CHANGETAB" class="ml-3 text-sm underline ">Login</button>
                <button @click="user_store.CHANGETAB" class="ml-5 text-sm underline ">Register</button>
                <button class="absolute top-5 right-5" @click="closeModal">
                    <i class="fa-solid fa-xmark fa-xl"></i>
                </button>
            </div>
            <component :is="tabs[current_tab]"></component>
        </div>
    </div>
</template>

<script setup>

import { ref, computed, watchEffect } from 'vue';
import LoginComp from './LoginComp.vue';
import RegisterComp from './RegisterComp.vue';
import canvasChecking from '../../store';
import userStore from '../../store/user';
const store = canvasChecking();
const user_store = userStore();
//******************************************************* Open CLose Tab *******************/
const tabs = [LoginComp, RegisterComp]

const current_tab = ref(0);
watchEffect(()=>{
    current_tab.value = user_store.GETCURRENTTAB;
})

//******************************************************************************************/

//******************************************************* Open CLose Tab *******************/
const login_register_modal_toggle = computed(()=>{
    store.CLOSEUSERDROPDOWN();
    return store.GETLOGINREGISTERTOGGLE;
})
const closeModal = () => {
    store.login_register_modal_toggle = false;
}
//******************************************************************************************/

</script>




<style lang="scss" scoped>

</style>
