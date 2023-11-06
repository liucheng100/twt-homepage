import { inject, computed, toRaw } from 'vue'

// 第一个参数dom: 父组件dom的ref对象
// 第二个参数type: 滚动的三种情况，分别接受值为：0、1、2
// 这个函数的返回值percent在type不同时代表的含义不同：
// type=0(用于制作滚入动画) : dom顶边在窗口底边以下时(percent=0) ~ dom顶边滚动到窗口顶边以上(percent=100) 
// type=1 (用于制作吸附时的动画<如果有的话>): dom顶边在窗口顶边以下(percent=0) ~ dom底边滚动到窗口底边以上(percent=100) 
// type=2 (用于制作滚出动画): dom底边在窗口底边以下(percent=0) ~ dom底边滚动到窗口顶边以上(percent=100) 

// 注意：三个分段的百分比像素密度并不相同，具体以代码逻辑为准
// percent这个响应式变量方便大家实现与滚动相关的滚入、吸附、滚出动画
// 值得注意的一点是：当dom.value.offsetHeight>=100vh 与 <100vh时，你的type对于同一个滚动状态会完全不同
// 所以尽量都>=100vh, 该钩子对<100vh的适配不优
export default function (dom, type) {

    const SA = inject('ScrollArea')
    const VS = toRaw(inject('viewDoms'))

    return computed(() => {

        if (!dom?.value || !SA.viewHeight) return 0;

        // 因为存在sticky定位，所以dom.value.offsetTop一旦吸附后会变化
        // 这里我们用高度累加计算恒定的offsetTop
        let offsetTop = 0
        let offsetTop__temp = 0
        VS.forEach(el => {
            // console.log(el === dom.value)
            if (el === dom.value) {
                offsetTop = offsetTop__temp
            } else {
                offsetTop__temp += el.offsetHeight
            }
        });


        let per = [0, 0, 0]

        if (SA.scrollTop <= offsetTop - SA.viewHeight) {
            per[0] = 0
            per[1] = 0
            per[2] = 0
        } else if (SA.scrollTop <= offsetTop) {
            per[0] = (SA.scrollTop - offsetTop + SA.viewHeight) / (SA.viewHeight) * 100
            per[1] = 0
            per[2] = 0
        } else if (SA.scrollTop <= offsetTop + dom.value.offsetHeight - SA.viewHeight) {
            per[0] = 100
            per[1] = (SA.scrollTop - offsetTop) / (dom.value.offsetHeight - SA.viewHeight) * 100
            per[2] = 0
        } else if (SA.scrollTop <= offsetTop + dom.value.offsetHeight) {
            per[0] = 100
            per[1] = 100
            per[2] = (SA.scrollTop - offsetTop - dom.value.offsetHeight + SA.viewHeight) / SA.viewHeight * 100
        } else {
            per[0] = 100
            per[1] = 100
            per[2] = 100
        }


        // console.log(per)

        return per[type];
    })


}