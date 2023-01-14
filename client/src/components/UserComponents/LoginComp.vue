
<template>

    <vee-form @submit="onSubmit" class="flex flex-col items-center m-0 p-0">
        <span class="text-2xl font-bold mb-4"><span class="text-3xl text-yellow-300">M</span>arket</span>
        <span class="text-xl font-bold my-4">Login</span>

        <vee-field name="email" type="email" :rules="{ required: true, email: true }"
            class=" m-4 py-2 w-full rounded-xl px-3 text-md text-gray-400 border-2 border-yellow-300 "
            placeholder="Email" />
        <ErrorMessage name="email" />

        <vee-field name="password" type="password" :rules="{ required: true, min: 8 }"
            class=" m-4 py-2 w-full rounded-xl px-3 text-md text-gray-400 border-2 border-yellow-300 "
            placeholder="Password" />
        <ErrorMessage name="password" />

        <button class="w-full py-2 rounded-xl font-bold my-3 border-2 border-yellow-300 hover:bg-yellow-300 hover:text-white">
            Login
        </button>
        
        <span v-if="loginErr" class="text-red-400 text-sm text-left w-full p-1">
            {{ loginErr }}
        </span>

    </vee-form>
   

    <a class="text-start w-4/5 mt-4 text-sm p-2 hover:underline hover:text-blue-300" href="#">Forgot Password</a>

</template>

<script setup>

import { ref, computed } from 'vue';
import router from '../../router/index';
import userStore from '../../store/user';
import canvasChecking from '../../store';
const store = userStore();
const canvas_checking = canvasChecking();
const loginErr = ref(null);
const onSubmit = async (values) => { 
    // await store.LOGINUSER(values).then((respond)=>{
    //     console.log('yes enter ',respond);
    //     canvas_checking.login_register_modal_toggle = false;
    //     router.push('/');
    // }).catch((err)=>{
    //     console.log('not found');
    // })
        await store.LOGINUSER(values).then((respond)=>{
           loginErr.value = null;
            canvas_checking.login_register_modal_toggle = false;
            router.push('/');
        }).catch((err)=>{
            loginErr.value = err;
        })
    
};



</script>




<style lang="scss" scoped>

</style>
