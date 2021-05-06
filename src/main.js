import {createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import eventBus from 'vue3-eventbus'

import toast from 'components/common/toast'

createApp(App).use(store).use(router).use(eventBus).use(toast).mount('#app')

// https://www.vue-js.com/topic/5fc8d6c896b2cb0032c38819 
// Vue 组件间通信六种方式（完整实践版）__Vue.jsx

//https://dev.to/chenxeed/awesome-breaking-changes-in-vue-3-if-you-migrate-from-vue-2-3b98
//vue3和vue2的不同之处