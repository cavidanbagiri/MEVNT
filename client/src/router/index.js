

import {createRouter, createWebHistory} from 'vue-router';


const HomePage = () => import('../pages/HomePage.vue');
const ProductItemPage = () => import('../pages/ProductItemPage.vue');
const CatalogPage = () => import('../pages/CatalogPage.vue');
const PageNotFound = () => import('../pages/404Page.vue');
const SettingsPage = () => import('../pages/SettingsPage.vue');


const router = createRouter({

    history:createWebHistory(),
    routes : [
        {path:'/', name:'Home', component:HomePage},
        {path:'/product', name:'Product', component:ProductItemPage},
        {path:'/catalog/:category_name', name:'Catalog', component:CatalogPage},
        {path: '/settings', name:'Settings', component: SettingsPage},
        {path: '/:pathMatch(.*)*', component: PageNotFound},
    ],
})

router.beforeEach((to, from, next) => {
    // if(to)
    // console.log('len ',typeof to.params);
    if(Object.keys(to.params).length){
        document.title='Market '+`${to.name} - ${to.params.category_name}`;
    }else{
        document.title='Market '+`${to.name}`;
    }
    next();
})

export default router;