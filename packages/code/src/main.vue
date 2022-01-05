<template>
  <pre class="line-numbers">
        <code class="language-html">
          <slot></slot>
        </code>
  </pre>
</template>

<!-- 设置组件名 -->
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "gCode"
})
</script>

<!-- 使用setup语法糖 -->
<script setup lang="ts">
import { onMounted } from "vue"
import prismjs from "prismjs"
import "prismjs/themes/prism-okaidia.css"
onMounted(() => prismjs.highlightAll())
</script>

<style lang="less" scoped>
.back-dialog {
  position: fixed;
  display: block;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  top: 0px;
  left: 0px;
  z-index: 99999;

  .back-dialog-content {
    width: 500px;
    height: 249px;
    background: #fff;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    animation: mymove 0.3s;
    .title {
      font-size: 36px;
      color: #000;
      font-weight: 700;
      text-align: center;
      line-height: 104px;
      height: 104px;
    }

    .text {
      font-size: 24px;
      text-align: center;
      line-height: 239 px;
    }

    .bottom {
      margin-top: 24px;
      height: 104px;
      line-height: 104px;
      text-align: center;
      display: flex;
      border-top: 1px solid #eee;

      .cancel {
        color: #ee0a24;
        flex: 1;
        font-size: 24px;
      }

      .confirm {
        color: #07c160;
        flex: 1;
        font-size: 24px;
        border-left: 1px solid #eee;
      }
    }
  }
  @keyframes mymove {
    from {
      transform: translate(-50%, -55%);
    }
    to {
      transform: translate(-50%, -50%);
    }
  }
  @keyframes myleave {
    from {
      transform: translate(-50%, -50%);
    }
    to {
      transform: translate(-50%, -60%);
    }
  }
}
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  .back-dialog-content {
    animation: myleave 1s;
  }
}
</style>
