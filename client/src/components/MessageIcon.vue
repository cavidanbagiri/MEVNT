

<template>
    <message-box v-if="toogle_value" @closeMSGBOX="closeMSGBOX" ></message-box>
    <div class="fixed bottom-10 right-10 bg-yellow-300 rounded-full p-3 z-10">
      <button @click="toggleMessageBox">
        <i class="fa-solid fa-comments fa-xl " style="color:white"></i>
      </button>
    </div>
</template>

<script setup>

  import { ref } from 'vue';
  import MessageBox from './MessageBox.vue';

  const toogle_value = ref(false);

  const toggleMessageBox = () => {
    toogle_value.value =!toogle_value.value;
    console.log(toogle_value.value);
  }
  const closeMSGBOX = () => {
    toogle_value.value = false;
  }

</script>
