<template>
    <div class="Test6">
        <img src="@/assets/test6.png" alt="">
    </div>
</template>

<script setup>

</script>

<style scoped>
.Test6{
    width: 100%;
    /* 100vh是innerbox的高度， 500px是你希望滚动时吸附的一个距离 */
    height: 100vh;
    /* 若最外层不需要sticky则需要给一个定位，因为这样才有z-index=0默认生效 */
    position: relative;
    
    
    /* border为演示内容 */
    border: solid 14px rgb(0, 255, 225);
}
img{
    height: 100%;
    width: 100%;
}
</style>