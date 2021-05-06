import Toast from './Toast.vue'

export default {
    //vue2写法
    install:(Vue) => {
        // //创建组件构造器
        // const toastConstructor = Vue.extend(Toast) //Vue.extend is not a function
        // //创建组件实例对象
        // const toast = new toastConstructor()
        // //将组件挂载到div元素中 mount 意为安装
        // toast.$mount(document.createElement("div"))
        // //将组件添加到body中
        // document.body.appendChild(toast.$el)
    }
}


// vue3 toast写法  http://blog.inode.club/vue3-toast/ 学完vue3再来