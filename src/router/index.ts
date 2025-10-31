/*
 * @Author: 汪迎平
 * @Date: 2025-10-30 14:01:28
 * @LastEditTime: 2025-10-31 13:58:35
 * @LastEditors: 汪迎平
 * @Description: 路由创建
 */

import { createRouter, createWebHistory  } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout/Layout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/pages/Home.vue'),
        meta: { title: '首页' }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/pages/About.vue'),
        meta: { title: '关于' }
      },
      {
        path: '/carList',
        name: 'carList',
        component: () => import('@/views/pages/CarList.vue'),
        meta: { title: '车型大全' }
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/pages/My.vue'),
        meta: { title: '我的' }
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 页面切换时滚动到顶部
    return { top: 0 }
  }
})


// 全局前置守卫 - 处理页面标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})

export default router