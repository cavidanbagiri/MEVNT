

<template>
    <div class="flex items-center fixed bottom-28 right-10 z-10">
        <div class=" flex flex-col w-72 h-96  rounded-lg border bg-white shadow-lg">
            <!-- Inform Section -->
            <div class="flex justify-between px-3 mt-2 ">
                <span class="font-bold text-xl text-yellow-300" >Chatbot</span>
                <button @click="closeMessageBox"> 
                    <i class="fa-solid fa-xmark fa-lg" style="color:red;"></i>
                </button>
            </div>
            <hr class="mt-2">
            <div class="mt-2 h-full w-full p-3 flex ">
                <span class="text-sm font-bold">I am Anna - I am here for helping you. If u have a questions, you can ask me</span>
            </div>
            <div class="flex p-3 justify-around">
                <input type="text" v-autofocus class="rounded-md p-2 text-sm border w-full mx-3" placeholder="Write Message">
                <button class="rounded-full bg-slate-300 p-3">
                    <i class="fa-solid fa-paper-plane fa-lg" style="color:yellow"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>


    //Defining Emit Name as close
    const emit = defineEmits(['closeMSGBOX']);

    const closeMessageBox = () => {
        console.log('from msg box');
        emit('closeMSGBOX')
    }

</script>

<style lang="scss" scoped>

</style>