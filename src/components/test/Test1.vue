<template>
    <div class="Test1" ref="Test1">
        <img src="@/assets/test1.png" alt="">
    </div>
</template>

<script setup>
import { ref, inject, watch, watchEffect, computed } from 'vue'
import usePercent from '@/hooks/usePercent'


const isPc = inject('isPc')
const Test1 = ref()



const per0 = usePercent(Test1,0) // 滚入
const per1 = usePercent(Test1,1) // 吸附
const per2 = usePercent(Test1,2) // 滚出
watchEffect(() => {
    // console.log('Test1的per0:  ',per0.value)
    // console.log('Test1的per1:  ',per1.value)
    console.log('Test1的per2:  ',per2.value)
})

watch(isPc, (to) => {
    // 改变浏览器宽度至手机打印
    console.log('isPc:  ',to)
})



</script>

<style scoped>
.Test1 {
    width: 100%;
    /* 高度根据实际需要设置，这里演示设为97 */
    height: 100vh;
    /* border为演示内容 */
    border: solid 14px rgb(27, 47, 31);
    /* sticky+top实现悬停效果 */
    position: sticky;
    top: -14px;
    /* z-index不设置默认为0 */
    /* z-index: 0; */

    /* 动画 */
    transform: translateY( v-bind(" -per2*2.3 + 'px' ") ) scale( v-bind(" 1-(per2*.01*.5) ") );
    opacity: v-bind(" 1-per2/100 ");
    /* 这里动画只是一个使用演示，实际开发中按需求精调 */
}

img {
    height: 100%;
    width: 100%;
}
</style>