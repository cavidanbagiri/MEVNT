f
<template>
    <div class="h-96 mt-1 mb-5 mx-1 p-0 relative overflow-hidden">
        <div
            class="flex justify-between items-center h-full absolute p-0 m-0 rounded-3xl top-0 left-0 right-0 bottom-0 ">
            <img :src="sliders[count]" ref="image_section"
                class="slider h-96 w-full p-0 m-0 rounded-3xl top-0 left-0 right-0 bottom-0 " alt="">

            <button @click="carouselPrev"
                class="absolute left-0  rounded-full ml-3 bg-white hover:opacity-100 opacity-50 w-10 h-10"><i
                    class="fa-solid fa-arrow-left fa-lg "></i></button>
            <button @click="carouselNext"
                class="absolute right-0 rounded-full mr-3 bg-white hover:opacity-100 opacity-50 w-10 h-10"><i
                    class="fa-solid fa-arrow-right fa-lg "></i></button>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';

//********************************************************** Create Item Counting Value ***************************************************/
const count = ref(0);
const sliders = ref([
    '/src/assets/img_slider_1.jpg',
    '/src/assets/img_slider_2.jpg',
    '/src/assets/img_slider_3.jpg',
]);

const carouselPrev = () => {
    image_section.value.classList.add('image-slider-prev');
    setTimeout(()=>{ 
        count.value === 0 ? count.value = sliders.value.length - 1 : count.value -= 1;
        image_section.value.classList.remove('image-slider-prev');
    },1000)
}
const carouselNext = () => {
    image_section.value.classList.add('image-slider-next');
    setTimeout(()=>{
        count.value === sliders.value.length - 1 ? count.value = 0 : count.value += 1; 
        image_section.value.classList.remove('image-slider-next');
    },1000)
}
//******************************************************************************************************************************************/

//********************************************************** Create Item Counting Value ***************************************************/
const image_section = ref(null);
//******************************************************************************************************************************************/
</script>

<style scoped>
.slider{
    /* transition: all 200ms linear; */
    transition: 1000ms ease;
}
.image-slider-prev{
    /* transform: translateX(100%); */
    animation: prevslider 1s linear;
}
.image-slider-next{
    /* transform: translateX(100%); */
    animation: nextslider 1s linear;
}

@keyframes prevslider{
    from{
        transform: translateX(0);
    }
    to{
        transform: translateX(-100%);
    }
}

@keyframes nextslider{
    from{
        transform: translateX(0);
    }
    to{
        transform: translateX(100%);
    }
}

</style>