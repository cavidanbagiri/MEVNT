

<template>
    <div class="m-0 p-0">

        <carousel></carousel>

        <span class="text-5xl font-bold ml-1 lg:m-10">Computers</span>
        <div class="flex flex-wrap w-screen justify-around p-0 m-0">
            <div v-for="i in 50" :key="i" class="m-0 p-0">
                <card-item></card-item>
            </div>
        </div>

    </div>
</template>

<script setup>

import Carousel from '../components/Carousel.vue';
import CardItem from '../components/CardItem.vue';



</script>
