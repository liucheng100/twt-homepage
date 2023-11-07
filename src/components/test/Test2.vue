<template>
    <div class="Test2" ref="Test2">
        <div class="innerBox">
            <img src="@/assets/test2.png" alt="">
        </div>
    </div>
</template>

<script setup>
import { ref, inject, watch, computed } from 'vue'
import usePercent from '@/hooks/usePercent'

const Test2 = ref()




const per0 = usePercent(Test2,0) // 滚入
const per1 = usePercent(Test2,1) // 吸附
const per2 = usePercent(Test2,2) // 滚出

 
</script>

<style scoped>
.Test2{
    width: 100%;
    /* 100vh是innerbox的高度， 1000px是你希望滚动时吸附的一个距离 */
    height: calc( 100vh + 1000px );
    /* 若最外层不需要sticky则需要给一个定位，因为这样才有z-index=0默认生效 */
    position: relative;
    
    /* border为演示内容 */
    border: solid 14px rgb(255, 65, 230);
}
.innerBox{
    width: 100%;
    height: 99vh;
    /* innerBox的sticky实现吸附效果 */
    position: sticky;
    top: 0px;
    
    /* border为演示内容 */
    border: solid 14px rgb(8, 211, 116);

    opacity: v-bind(" per0/100 ");
    transform: rotate( v-bind(" per1*.01*360 + 'deg' ") );

}
img{
    height: 100%;
    width: 100%;
}
</style>