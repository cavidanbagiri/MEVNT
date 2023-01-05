import { createApp } from 'vue';
import './index.css';
import App from './App.vue';

//Import Pinia
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
const pinia = createPinia();
pinia.use(piniaPersist);

//Import Router
import router from './router';

//Import Custom Directives
import {Focus} from './directives/Focus';

//Import Vee-Validation Plugin
import ValidationPlugin from './plugins/validation';

//Create App
const app = createApp(App);

//Use Pinia
app.use(pinia)

//Use Router
app.use(router);

//User Custom Directives
app.directive('autofocus',Focus);

//Use Own Vee Validation Plugin
app.use(ValidationPlugin);

app.mount('#app');
