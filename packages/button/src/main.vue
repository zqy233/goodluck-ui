<template>
  <div :class="['g-button', props.shadow ? `g-button-shadow-${props.type}` : '', opacity ? 'opacity' : '']" @click="animationStart" @mouseenter="opacity = true" @mouseleave="opacity = false" @touchstart="opacity = true" @touchend="opacity = false">
    <button :class="['g-button-content', props.type ? 'g-button-' + props.type : '']" :style="{ backgroundColor: props.backgroundColor }" ref="button">
      <span class="g-btn-con">
        <slot></slot>
      </span>
      <span ref="span" :class="animation ? 'buttonAnimation' : ''"> </span>
    </button>
    <article v-if="props.badge || props.max || props.dot" :class="['g-badge', props.dot ? 'g-dot' : '']" :style="{ backgroundColor: props.badgeColor }">{{ delBadge }}</article>
  </div>
</template>

<script lang="ts">
// 定义组件名
import { defineComponent } from "vue"
export default defineComponent({
  name: "gButton"
})
</script>
<script lang="ts" setup>
// 定义组件逻辑
import { computed, defineProps, ref, withDefaults } from "vue"
const props = withDefaults(
  defineProps<{
    backgroundColor?: string
    type?: string
    badge?: string
    max?: string
    badgeColor?: string
    dot?: boolean
    shadow?: boolean
  }>(),
  {
    backgroundColor: "",
    shadow: true
  }
)
const opacity = ref(false)
const delBadge = computed(() => {
  if (props.dot) return
  if (!props.badge) return `${props.max}+`
  return parseInt(props.badge) > parseInt(props.max as string) ? `${props.max}+` : props.badge
})
const animation = ref(false)
const span = ref<HTMLElement | null>(null)
const button = ref<HTMLElement | null>(null)
function animationStart(e: MouseEvent) {
  const x = e.clientX - button.value!.getBoundingClientRect().left
  const y = e.clientY - button.value!.getBoundingClientRect().top
  const overlay = span.value
  overlay!.style.left = x + "px"
  overlay!.style.top = y + "px"
  if (!animation.value) {
    animation.value = true
    setTimeout(() => {
      animation.value = false
    }, 500)
  }
}
</script>

<style lang="less" scoped>
.g-button {
  display: inline-block;
  position: relative;
  width: 200px;
  .g-button-content {
    background-color: #1f68d1;
    color: white;
    font-size: 18px;
    width: 100%;
    min-height: 40px;
    border-radius: 5px;
    word-break: break-all;
    padding: 10px 35px;
    border: none;
    outline: 0;
    position: relative;
    z-index: 2;
    overflow: hidden;
  }
  .g-button-blue {
    border-radius: 0;
    background-color: #1f68d1;
  }
  .g-button-yellow {
    background-color: #f59a23;
  }
  .g-button-green {
    background-color: #14b960;
  }
  .g-button-red {
    background-color: #bf1d22;
    color: #fff;
  }

  .g-badge {
    display: inline-block;
    position: absolute;
    top: -10px;
    right: -15px;
    min-height: 18px;
    line-height: 18px;
    text-align: center;
    padding: 2px 6px;
    margin-left: -13px;
    border-radius: 13px;
    background-color: #e6a23c;
    color: white;
    border: 2px solid white;
    z-index: 10;
  }
  .g-dot {
    top: -8px;
    right: -8px;
    min-width: 18px;
    height: 16px;
    z-index: 20;
  }
  &::after {
    content: "";
    display: block;
    width: 90%;
    margin-left: 5%;
    height: 10px;
    position: absolute;
    left: 0;
    bottom: 1px;
    z-index: 1;
    background: #1f68d1;
    box-shadow: #1f68d1 0px 0px 20px;
  }
}
.g-button-shadow-green {
  &::after {
    content: "";
    background: #14b960;
    box-shadow: #14b960 0px 0px 20px;
  }
}
.g-button-shadow-yellow {
  &::after {
    content: "";
    background: #e6a23c;
    box-shadow: #e6a23c 0px 0px 20px;
  }
}
.g-button-shadow-red {
  &::after {
    content: "";
    background: #bf1d22;
    box-shadow: #bf1d22 0px 0px 20px;
  }
}
.opacity {
  opacity: 0.8;
  transition: 0.2s opacity ease-out;
}
.buttonAnimation {
  position: absolute;
  height: 400px;
  width: 400px;
  background: #fff;
  top: 0;
  left: 0;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
  animation: buttonAnimation 0.5s infinite;
}
@keyframes buttonAnimation {
  0% {
    height: 0px;
    width: 0px;
    opacity: 0.5;
  }
  100% {
    height: 400px;
    width: 400px;
    opacity: 0;
  }
}
</style>
