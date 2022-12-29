

import {createRouter, createWebHistory} from 'vue-router';


const HomePage = () => import('../pages/HomePage.vue');
const ProductItemPage = () => import('../pages/ProductItemPage.vue');
const CatalogPage = () => import('../pages/CatalogPage.vue');

const router = createRouter({

    history:createWebHistory(),
    routes : [
        {path:'/', name:'Home', component:HomePage},
        {path:'/product', name:'Product', component:ProductItemPage},
        {path:'/catalog/:category_name', name:'Catalog', component:CatalogPage},
    ],
})


export default router;