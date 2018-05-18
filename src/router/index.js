import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall' //首页

Vue.use(Router)
    //vue 路由
export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'ShoppingMall',
        component: ShoppingMall
    }]
})