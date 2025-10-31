/*
 * @Author: 汪迎平
 * @Date: 2025-10-30 14:01:28
 * @LastEditTime: 2025-10-30 14:36:21
 * @LastEditors: 汪迎平
 * @Description: 路由创建
 */

import { createRouter, createWebHistory  } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router