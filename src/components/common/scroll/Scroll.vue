<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
// https://better-scroll.github.io/docs/zh-CN/guide/ better-scroll参考文档
import BScroll from 'better-scroll'

export default {
    components:{
        BScroll
    },
    //设置主动传入的参数，便于复用
    props:{
        // 默认情况下BScroll是不可以实时的监听滚动位置
        // probe 侦测
        // 0,1都是不侦测实时的位置
        // 2: 在手指滚动的过程中侦测, 手指离开后的惯性滚动过程中不侦测.
        // 3: 只要是滚动, 都侦测.
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:true
        }
    },
    data() {
        return {
            scroll:{}
        }
    },
    mounted(){
        //better-scroll 要求content外层包裹一个wrapper 所以当wrapper不存在时 直接返回
        if(!this.$refs.wrapper) return
        //初始化scroll
        this.scroll = new BScroll(this.$refs.wrapper,{
//             click
            // 类型：boolean
            // 默认值：false
            // 作用：BetterScroll 默认会阻止浏览器的原生 click 事件。
            // 当设置为 true，BetterScroll 会派发一个 click 事件，
            // 我们会给派发的 event 参数加一个私有属性 _constructed，值为 true
            click:true,
            probeType:this.probeType,
            // 当 pullUpLoad 配置为 true 的时候，插件内部使用的是默认的插件选项对象。
            pullUpLoad:this.pullUpLoad,         
        })
       
    //    console.log(this.scroll);
        //监听滚动的位置
        // on(type, fn, context)
        // 参数：
        // {string} type 事件名
        // {Function} fn 回调函数
        // {Object} context 函数执行的上下文环境，默认是 this
        this.scroll.on('scroll',position => {
            // console.log(position);
            this.$emit('contentScroll',position)
        })

        //如果不判断pullupLoad
        // [better-scroll warn] EventEmitter has used unknown event type: "pullingUp", should be oneof 
        // ["refresh","contentChanged","enable","disable","beforeScrollStart","scrollStart",
        // "scroll","scrollEnd","scrollCancel","touchEnd","flick","destroy"]
        if(this.pullUpLoad){
            this.scroll.on('pullingUp',() => {
            this.$emit('pullingUp')
         })
        }
        
    },
    methods: {
        //在父组件中使用方法时，需要通过$refs.ref.scrollName来调用此方法 这里做一层封装
        //滚动到指定位置
        scrollTo(x,y,time=300){
            this.scroll && this.scroll.scrollTo(x,y,time)
        },
        refresh(){
            this.scroll && this.scroll.refresh()
        },
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp()
        }
    },
}
</script>
<style>
    
</style>