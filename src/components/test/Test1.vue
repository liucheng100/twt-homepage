<template>
    <div class="Test1" ref="Test1">
        <img src="@/assets/test1.png" alt="">
    </div>
</template>

<script setup>
import { ref, inject, watch, computed } from 'vue'

const SA = inject('ScrollArea')
const Test1 = ref()

const offsetTop = computed(()=>{
    return Test1.value.offsetTop
})

watch(SA, (to) => {

    console.log('Test1:  ',to, offsetTop.value)

})



</script>

<style scoped>
.Test1 {
    width: 100%;
    height: 210px;
}

img {
    height: 100%;
    width: 100%;
}
</style>