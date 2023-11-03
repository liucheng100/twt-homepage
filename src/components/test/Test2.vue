<template>
    <div class="Test2" ref="Test2">
        <img src="@/assets/test2.png" alt="">
    </div>
</template>

<script setup>
import { ref, inject, watch, computed } from 'vue'

const SA = inject('ScrollArea')
const Test2 = ref()

const offsetTop = computed(()=>{
    return Test2.value.offsetTop
})

watch(SA, (to) => {

    console.log('Test2:  ',to, offsetTop.value)

})

</script>

<style scoped>
.Test2{
    width: 100%;
    height: 350px;
}
img{
    height: 100%;
    width: 100%;
}
</style>