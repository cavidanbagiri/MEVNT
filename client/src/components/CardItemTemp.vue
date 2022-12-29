
<template>
    <div class="flex flex-col w-60 h-auto mt-2 hover:shadow-2xl mx-2 mb-10 hover:scale-105 hover:rounded-xl transition ease-in-out delay-150">
        <router-link to="/">
            <div>
                <!-- <img class="h-64 w-full m-0 p-0" src="https://basket-08.wb.ru/vol1131/part113161/113161794/images/c246x328/1.jpg" alt=""> -->
                <img class="h-60 w-full m-0 p-0" :src="props.item.Thumbnail" alt="">
            </div>
            <div class="pl-2 my-1 flex  items-center">
                <span class="bg-red-500 ml-2 text-xs rounded-lg text-white font-bold px-2">%{{ props.item.Discount }}</span>
            </div>
            <div class="px-3 my-1 flex  items-center">
                <span class="font-bold text-md">{{ props.item.Price }} ₽</span> <span class="pl-3 text-sm text-gray-500">99990 ₽</span>
            </div>
            <div class="px-3 my-3 flex  items-center">
                <i class="fa-solid fa-star fa-sm" style="color:orange"></i>
                <i class="fa-solid fa-star fa-sm" style="color:orange"></i>
                <i class="fa-solid fa-star fa-sm" style="color:orange"></i>
                <i class="fa-solid fa-star fa-sm" style="color:orange"></i>
                <i class="fa-solid fa-star fa-sm" style="color:orange"></i>
            </div>
            <div class="px-3 my-1 flex text-md items-center">
                <span class="text-md text-slate-400"><span class="text-black">Brand</span>  {{ props.item.Brand }} </span>
            </div>
            <div class="px-3 my-1 flex overflow-hidden h-12">
                <span class="text-sm text-slate-400 text-start"><span class="text-black">Model</span>  {{ props.item.Model }}</span>
            </div>
            <div class="my-2 flex  items-center justify-start px-3">
                <button class="bg-yellow-300 text-white w-full py-1 rounded-md transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 hover:opacity-50 hover:bg-yellow-400 duration-300">
                    Add
                </button>
            </div>
        </router-link>
    </div>
</template>

<script setup>

    const props = defineProps(['item']);



</script>

<style lang="scss" scoped>

</style>

