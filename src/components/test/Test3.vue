<template>
    <div class="Test3">
        <div class="innerBox">
            <img src="@/assets/test3.png" alt="">
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.Test3{
    width: 100%;
    /* 100vh是innerbox的高度， 500px是你希望滚动时吸附的一个距离 */
    height: calc( 100vh + 800px );
    /* 若最外层不需要sticky则需要给一个定位，因为这样才有z-index=0默认生效 */
    position: relative;
    
    
    /* border为演示内容 */
    border: solid 14px rgb(43, 197, 149);
}
.innerBox{
    width: 100%;
    height: 100vh;
    position: sticky;
    top: 0px;

    background-color: rgb(249,251,254);

    display: flex;
    justify-content: flex-end;
    align-items: center;

    overflow: hidden;
}

img{
    height: 400px;
    /* width: 100%; */
}
</style>