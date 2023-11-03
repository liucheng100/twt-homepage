<template>
    <div class="card-mini">
        <div class="cover" ref="cover" :style="{
            backgroundImage: `url('${coverDOM}')`,
            height: coverH + 'px',
        }"></div>
        <div class="bot">
            <div class="title">
                {{ title }}
            </div>
            <div class="bar">
                <div class="flex overflow">
                    <div class="avatar" :style="{ backgroundImage: `url('${avatar}')` }"></div>
                    <div class="info">{{ auth }}</div>
                </div>
                <div class="flex">
                    <div class="eye"></div>
                    <div class="info">{{ hot }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import pubuse from '@/utils/pub-use'
export default {
    name: "CardMini",
    props: {
        title: {
            type: String,
        },
        auth: {
            type: String,
        },
        avatar: {
            type: String,
        },
        cover: {
            type: String,
        },
        hot: {
            type: [String, Number],
        },
        rateHW: {
            type: [Number, Boolean],
            default: false
        },
    },
    data() {
        return {
            coverH: 166,
            coverDOM: pubuse('loading.gif')
        }
    },
    methods: {

    },
    watch: {
        // cover() {
        //     let img = new Image();
        //     img.src = this.cover;
        //     img.onload = (e) => {
        //         let naturalHeight = e.target.naturalHeight
        //         let naturalWidth = e.target.naturalWidth
        //         // console.log(naturalHeight,naturalWidth)
        //         let rate = naturalHeight / naturalWidth
        //         // follow!
        //         let W = this.$refs.cover.offsetWidth
        //         console.log(naturalHeight, naturalWidth, W)
        //         setTimeout(() => {
        //             this.coverH = rate * W
        //         }, 250);
        //     }
        // },
        rateHW(to) {
            if (to) {
                this.coverDOM = this.cover
                let W = this.$refs.cover.offsetWidth
                setTimeout(() => {
                    this.coverH = this.rateHW * W
                }, 250);
            }
        }
    },
    mounted() {
        // let img = new Image();
        // img.src = this.cover;
        // img.onload = (e) => {
        //     this.coverDOM = this.cover
        //     let naturalHeight = e.target.naturalHeight
        //     let naturalWidth = e.target.naturalWidth
        //     // console.log(naturalHeight,naturalWidth)
        //     let rate = naturalHeight / naturalWidth
        //     // follow!
        //     let W = this.$refs.cover.offsetWidth
        //     // console.log(naturalHeight, naturalWidth, W)
        //     setTimeout(() => {
        //         this.coverH = rate * W
        //     }, 250);
        // }
        if (this.rateHW) {
            this.coverDOM = this.cover
            let W = this.$refs.cover.offsetWidth
            setTimeout(() => {
                this.coverH = this.rateHW * W
            }, 250);
        }
    },

}
</script>


<style scoped>
.card-mini {
    width: calc(50vw - 30px);
    max-width: 43vw;
    min-width: 40vw;
    margin-bottom: 20px;
    /* height: 230px; */
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.1);
}

.cover {
    height: 166px;
    background: center center / cover no-repeat;
    background-color: #53517742;
    transition: height .3s;
}

.bot {
    height: 64px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.title {
    font-size: 16px;
    color: rgba(31, 31, 31, 1);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.eye {
    height: 13px;
    width: 13px;
    background: url('../../assets/eye.svg') center center / 100% no-repeat;
    margin-right: 5px;
}

.info {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    font-weight: 300;
    color: rgba(153, 156, 160, 1);
    transform: translateY(-.6px);
}

.flex {
    display: flex;
    align-items: center;
}

.overflow {
    overflow: hidden;
}

.avatar {
    flex-shrink: 0;
    height: 17px;
    width: 17px;
    border-radius: 50%;
    border: solid 1px white;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    margin-right: 5px;
    background: center center / 100% no-repeat;
    background-color: rgba(217, 217, 217, 1);
}
</style>