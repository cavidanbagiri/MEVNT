

<template>
    <div class="m-0 p-0">
        
        <form class="mt-5"  @sublit.prevent="onSubmit" enctype="multipart/form-data">

            <input type="file" @change="fileselect" ref="selected_file">
            <br>
            <button @click="onSubmit" class="my-5 bg-yellow-400 p-3 rounded-lg">
                Add Image
            </button>

        </form>

    </div>
</template>

<script setup>

import {ref} from 'vue';
import FormData from 'form-data';
import userStore from '../store/user';
const user_store = userStore();

let selected_file = ref(null); 
const file = ref(null);

const fileselect = () => {
    // console.log('selected file : ',selected_file);
    // const file = selected_file.value.files[0];
    // let data = new FormData();
    // data.append('file',file);
    // console.log(data);
    // user_store.addProfileImage(data);
    file.value = selected_file.value.files[0];
    // let data = new FormData();
    // data.append('file',file.value);
    // user_store.addProfileImage(data);
}

const onSubmit = () => {
    let data = new FormData();
    data.append('file',file.value);
    user_store.addProfileImage(data);
}



</script>

<style scoped>

</style>