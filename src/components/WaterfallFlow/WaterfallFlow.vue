<template>
    <div class="waterfall">
        <div class="columner">
            <CardMini 
                :rateHW="i.rateHW"
                :key="i.workId" v-for="(i, idx) in DATA" :title=i.workTitle :auth="i.makerName" :avatar=i.makerAvatar
                :hot=i.views :cover=concatSrc(i.coverFile) @click="$router.push({
                        path: '/WorkDetail',
                        query: { workId: i.workId }
                    })"></CardMini>
        </div>
        <div class="columner">
            <CardMini 
                :rateHW="i.rateHW"
                :key="i.workId" v-for="(i, idx) in DATA" :title=i.workTitle :auth="i.makerName" :avatar=i.makerAvatar
                :hot=i.views :cover=concatSrc(i.coverFile) @click="$router.push({
                        path: '/WorkDetail',
                        query: { workId: i.workId }
                    })"></CardMini>
        </div>
    </div>
</template>

<script>
import CardMini from '@/components/Card/CardMini.vue'
import { concatSrc } from '@/api/file'
export default {
    name: "WaterfallFlow",
    props: {
        DATA: {
            type: Array,
            default: [],
        }
    },
    components: [
        CardMini
    ],
    data() {
        return {

        }
    },
    methods: {
        concatSrc(x) {
            return concatSrc(x)
        }
    },
    watch: {

    },
    mounted() {


    },

}
</script>


<style scoped>
.waterfall {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.columner {
    width: auto;
    height: auto;
}
</style>