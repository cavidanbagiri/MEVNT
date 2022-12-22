
<template>

    <vee-form @submit="onSubmit" class="flex flex-col items-center m-0 p-0">
        <span class="text-2xl font-bold mb-4"><span class="text-3xl text-yellow-300">M</span>arket</span>
        <span class="text-xl font-bold my-4">Login</span>

        <vee-field name="email" type="email" :rules="{ required: true, email: true }"
            class=" m-4 py-2 w-4/5 rounded-xl px-3 text-md text-gray-400 border-2 border-yellow-300 "
            placeholder="Email" />
        <ErrorMessage name="email" />

        <vee-field name="password" type="password" :rules="{ required: true, min: 8 }"
            class=" m-4 py-2 w-4/5 rounded-xl px-3 text-md text-gray-400 border-2 border-yellow-300 "
            placeholder="Password" />
        <ErrorMessage name="password" />

        <button class="w-4/5 py-2 rounded-xl font-bold my-3 border-2 border-yellow-300">
            Login
        </button>

    </vee-form>

    <a class="text-start w-4/5 mt-4 text-sm p-2 hover:underline hover:text-blue-300" href="#">Forgot Password</a>

</template>

<script setup>

import userStore from '../../store/user';
const store = userStore();

const onSubmit = async (values) => { 

    // await store.REGISTERUSER(values);
    console.log('current user ',store.current_user);

    console.log('clicked : ', store)

};

</script>




<style lang="scss" scoped>

</style>
