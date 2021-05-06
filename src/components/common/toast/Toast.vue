<template>
    <div id="toast" v-show="isShow">
        {{message}}
    </div>
</template>

<script>
export default {
    name:'toast',
    data() {
        return {
            message:'',
            isShow:false
        }
    },
    methods: {
        show(message,duration=2000){
            this.message = message
            this.isShow = true
            setTimeout(() => {
                this.message = ''
                this.isShow = false
            }, duration);
        }
    },
}
</script>

<style scoped>
    #toast{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: rgba(10, 3, 3,.6);
        color: #fff;
        padding: 5px 5px;
    }
</style>