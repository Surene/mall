import {createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import eventBus from 'vue3-eventbus'


createApp(App).use(store).use(router).use(eventBus).mount('#app')

// https://www.vue-js.com/topic/5fc8d6c896b2cb0032c38819 
// Vue 组件间通信六种方式（完整实践版）__Vue.jsx