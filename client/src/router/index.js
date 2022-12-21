

import {createRouter, createWebHistory} from 'vue-router';

// import HomePage from '../pages/HomePage.vue';
// import ProductItemPage from '../pages/ProductItemPage.vue';

const HomePage = () => import('../pages/HomePage.vue');
const ProductItemPage = () => import('../pages/ProductItemPage.vue');
const CatalogPage = () => import('../pages/CatalogPage.vue');

const router = createRouter({

    history:createWebHistory(),
    routes : [
        {path:'/', name:'Home', component:HomePage},
        {path:'/product', name:'Product', component:ProductItemPage},
        {path:'/catalog', name:'Catalog', component:CatalogPage},
    ],
})


export default router;