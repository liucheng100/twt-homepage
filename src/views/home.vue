<template>
    <div class="home" @scroll="handleScroll">
        <Test1 :ref="doc"></Test1>
        <!-- <View1 :ref="doc"></View1> -->
        <Test2 :ref="doc"></Test2>
        <!-- <View2 :ref="doc"></View2> -->
        <Test3 :ref="doc"></Test3>
        <!-- <View3 :ref="doc"></View3> -->
        <Test4 :ref="doc"></Test4>
        <!-- <View4 :ref="doc"></View4> -->
        <Test5 :ref="doc"></Test5>
        <!-- <View5 :ref="doc"></View5> -->
        <Test6 :ref="doc"></Test6>
        <!-- <View6 :ref="doc"></View6> -->
        <Test7 :ref="doc"></Test7>
        <!-- <View7 :ref="doc"></View7> -->
        <Test8 :ref="doc"></Test8>
        <!-- <View8 :ref="doc"></View8> -->
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
import Test8 from '@/components/test/Test8.vue'

import View1 from '@/components/View1.vue'
import View2 from '@/components/View2.vue'
import View3 from '@/components/View3.vue'
import View4 from '@/components/View4.vue'
import View5 from '@/components/View5.vue'
import View6 from '@/components/View6.vue'
import View7 from '@/components/View7.vue'
import View8 from '@/components/View8.vue'

const ScrollArea = reactive({
    // scrollHeight >= viewHeight + scrollTop
    // 内容区域（滚动区域）总高度
    scrollHeight: 0,
    // 视口（父元素）的高度
    viewHeight: 0,
    // 滚动了多少高度
    scrollTop: 0
})

const viewDoms = reactive([])

// window对象的专属事件，当窗口改变大小触发
const isPc = ref(window.innerWidth > 768)
window.addEventListener('resize', ()=>{
    isPc.value = window.innerWidth > 768
})


provide('ScrollArea', ScrollArea)
provide('viewDoms', viewDoms)
provide('isPc', isPc)


const doc = (el) => {
    viewDoms.push(el.$el)
}

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

    /* 火狐没有overlay auto垫底 */
    overflow: auto;
    overflow: overlay;

    /* 开发的时候把下面两行注释掉 */
    padding: 14px;
    background-color: red;

}


/* 适用于 WebKit */
/* .home::-webkit-scrollbar {
  width: 8px;
}

.home::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.2);
  border-radius: 4px;

}

.home::-webkit-scrollbar-track {
  background-color: transparent;
} */
</style>