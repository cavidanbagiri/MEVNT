

<template>

    <div style="background-color: blue; height: 400px;">
        <div class="child" style="width:200px;height:200px; background-color: yellow;">
            1
        </div>
        <div class="">
            2
        </div>
    </div>

</template>


<style scoped>

.child:hover{
    -webkit-transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    /* animation: circle 1s;
    animation-direction: alternate; */
    /* animation-delay: 1s; */
}

@keyframes circle {
    
    from{
        transform: translateX(0px);
    }
    to{
        transform: translateX(300px);
    }

}

</style>

<script setup>
</script>
