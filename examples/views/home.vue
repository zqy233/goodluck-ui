<template>
  <section class="home">
    <header class="home-header">
      <p class="title">goodluck-ui</p>
    </header>
    <div class="home-container">
      <aside class="home-aside">
        <div class="menu-list">
          <p class="list-title">组件</p>
          <p class="menu-title" v-for="item in store.state.components" :key="item" @click="routerPush(item)" :class="{ 'menu-title-active': route.name == item }">{{ item }}</p>
        </div>
        <div class="menu-list">
          <p class="list-title">图标</p>
          <p class="menu-title" @click="routerPush('icon')" :class="{ 'menu-title-active': route.name == 'icon' }">font-awesome</p>
        </div>
      </aside>
      <main class="home-main">
        <router-view />
      </main>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
const store = useStore()
const router = useRouter()
const route = useRoute()
function routerPush(item: string) {
  router.push(item)
}
</script>

<style lang="scss" scoped>
.home-header {
  height: 60px;
  line-height: 60px;
  color: $skyblue;
  font-size: 20px;
  padding: 0px 40px;
  border-bottom: 2px solid #eeeeee;
  transition: color 0.2s ease;
  .title {
    width: 600px;
  }
}
.home-header:hover {
  color: $orange;
}
.home-container {
  display: flex;
  .home-aside {
    min-width: 180px;
    height: calc(100vh - 60px);
    overflow: auto;
    visibility: hidden;
    &:hover {
      visibility: visible;
    }
    .menu-list {
      visibility: visible;
      .list-title {
        padding: 10px 20px;
        margin-top: 20px;
        font-weight: bold;
        font-size: 16px;
      }
      .menu-title {
        font-size: 13px;
        line-height: 20px;
        font-weight: 500;
        color: $text-color;
        padding: 5px;
        padding-left: 30px;
        margin: 5px;
        transition: color 0.5s;
        border-radius: 5px;
      }
      .menu-title-active {
        background-color: $blueBg;
        color: $skyblue;
      }
    }
  }
  .home-main {
    width: 100%;
    height: calc(100vh - 100px);
    padding: 20px;
    overflow: auto;
  }
}
</style>
