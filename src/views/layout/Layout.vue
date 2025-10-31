<!--
 * @Author: 汪迎平
 * @Date: 2025-10-31 13:55:29
 * @LastEditTime: 2025-10-31 14:38:25
 * @LastEditors: 汪迎平
 * @Description: 布局页面
-->

<template>
  <div class="layout-container">
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="tabbar-container">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="shop-o" to="/carList">选车</van-tabbar-item>
        <van-tabbar-item icon="comment-o" to="/about">动态</van-tabbar-item>
        <van-tabbar-item icon="user-circle-o" to="/my">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";


const active = ref(0);
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-bottom: 50px;
  box-sizing: border-box;
}
</style>
