<template>
  <transition>
    <article class="g-messgae" v-if="showMessage">
      <p>保存成功</p>
    </article>
  </transition>
</template>

<script lang="ts">
// 定义组件名
import { defineComponent } from "vue"
export default defineComponent({
  name: "gMessage"
})
</script>
<script lang="ts" setup>
// 定义组件逻辑
import { ref } from "vue"
const showMessage = ref(true)
function openMessage() {
  showMessage.value = true
  setTimeout(() => {
    showMessage.value = false
  }, 1000)
}
</script>

<style lang="less" scoped>
.g-messgae {
  width: 380px;
  height: 50px;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translateY(50%) translateX(-50%);
  display: flex;
  align-items: center;
  animation: mymove 0.8s;
  background-color: #f0f9eb;
  color: #99d67b;
  border-radius: 10px;
  P {
    background-color: #f0f9eb;
    color: #99d67b;
  }
}
@keyframes mymove {
  from {
    opacity: 0;
    transform: translateY(-50%) translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(50%) translateX(-50%);
  }
}
@keyframes myleave {
  from {
    opacity: 1;
    transform: translateY(50%) translateX(-50%);
  }
  to {
    opacity: 0;
    transform: translateY(-50%) translateX(-50%);
  }
}
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}
.v-enter-from,
.v-leave-to {
  animation: myleave 1s;
}
</style>
