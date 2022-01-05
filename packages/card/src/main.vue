<template>
  <div class="g-card">
    <div class="g-card-content">
      <slot></slot>
    </div>
  </div>
</template>

<!-- 设置组件名 -->
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "gCard"
})
</script>

<!-- 使用setup语法糖 -->
<script setup lang="ts"></script>

<style lang="scss" scoped>
.g-card {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  transition: 0.3s;
}
.g-card:focus,
.g-card:hover {
  box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%), 0 2px 4px 0 rgb(232 237 250 / 50%);
}

.g-card-content {
  padding: 18px 20px;
  border-bottom: 1px solid #ebeef5;
}
</style>
