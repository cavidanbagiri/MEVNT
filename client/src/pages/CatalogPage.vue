
<template>
    <div class="grid grid-cols-12 gap-10">

        <LeftFilterSideVue></LeftFilterSideVue>
        
        <MainSide :category_name = route.params.category_name></MainSide>
        
    </div>
</template>

<script setup>

import { onMounted } from 'vue';
import {useRoute} from 'vue-router';
import productStore from '../store/product';

import LeftFilterSideVue from '../components/CatalogComponents/LeftFilterSide.vue';
import MainSide from '../components/CatalogComponents/MainSide.vue';

const store = productStore();

const route = useRoute();

onMounted(async()=>{
    await store.FETCHPRODUCTS(route.params.category_name);
})


</script>
