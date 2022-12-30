
<template>
    <div class="grid grid-cols-12 gap-10">

        <LeftFilterSideVue></LeftFilterSideVue>
        
        <MainSide :category_name = route.params.category_name></MainSide>
        
    </div>
</template>

<script setup>

import {useRoute} from 'vue-router';

import LeftFilterSideVue from '../components/CatalogComponents/LeftFilterSide.vue';
import MainSide from '../components/CatalogComponents/MainSide.vue';

const route = useRoute();


</script>
