
<template>
  <div class="relative">

    <navbar></navbar>

    <router-view></router-view>
    
    <canvas-vue></canvas-vue>

    <message-icon></message-icon>

    <login-register-modal></login-register-modal>

  </div>
</template>

<script setup>

import Navbar from '../src/layouts/Navbar.vue';
import MessageIcon from './components/MessageIcon.vue';
import LoginRegisterModal from './components/UserComponents/LoginRegisterModal.vue';
import CanvasVue from './components/Canvas.vue';




</script>



