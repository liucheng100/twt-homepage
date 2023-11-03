<template>
    <div class="home" @scroll="handleScroll">
        <Test1></Test1>
        <Test2></Test2>
        <Test3></Test3>
        <Test4></Test4>
        <Test5></Test5>
        <Test6></Test6>
        <Test7></Test7>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, provide } from 'vue'
import Test1 from '@/components/test/Test1.vue'
import Test2 from '@/components/test/Test2.vue'
import Test3 from '@/components/test/Test3.vue'
import Test4 from '@/components/test/Test4.vue'
import Test5 from '@/components/test/Test5.vue'
import Test6 from '@/components/test/Test6.vue'
import Test7 from '@/components/test/Test7.vue'

const ScrollArea = reactive({
    // scrollHeight >= viewHeight + scrollTop
    // 内容区域（滚动区域）总高度
    scrollHeight: 0,
    // 视口（父元素）的高度
    viewHeight: 0,
    // 滚动了多少高度
    scrollTop: 0
})

provide('ScrollArea', ScrollArea)

const handleScroll = (e)=>{
    // console.log(ScrollArea)
    ScrollArea.scrollHeight = e.target.scrollHeight
    ScrollArea.viewHeight = e.target.offsetHeight
    ScrollArea.scrollTop = e.target.scrollTop
}

</script>


<style scoped>
.home{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    background-color: pink;
    /* 火狐没有overlay auto垫底 */
    overflow: auto;
    overflow: overlay;
}

/* 适用于 WebKit */
.home::-webkit-scrollbar {
  width: 8px;
}

.home::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.2);
  border-radius: 4px;

}

.home::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>