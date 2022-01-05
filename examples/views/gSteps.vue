<template>
  <g-card>
    <g-steps :stepArr="stepArr" :activeIndex="activeIndex"></g-steps>
    <g-Button @click="change">通过</g-Button>
    <g-code>
      {{ s }}
    </g-code>
  </g-card>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
let stepArr = reactive([
  {
    title: "进度一",
    desc: "2021/04/13"
  },
  { title: "进度二", desc: "2021/04/13" },
  { title: "进度三", desc: "2021/04/13" },
  { title: "提交信息", desc: "2021/04/13" },
  { title: "提交信息", desc: "2021/04/13" }
])
let activeIndex = ref(0)
function change() {
  if (activeIndex.value < stepArr.length - 1) {
    activeIndex.value = activeIndex.value + 1
  } else {
    activeIndex.value = 0
  }
}
const s = `
  <template>
    <g-steps :stepArr="stepArr" :activeIndex="activeIndex"></g-steps>
    <g-Button @click="change">通过</g-Button>
  </template>
  <script lang="ts" setup>
  import { reactive, ref } from "vue"
  let stepArr = reactive([
    { title: "进度一",desc: "2021/04/13" },
    { title: "进度二", desc: "2021/04/13" },
    { title: "进度三", desc: "2021/04/13" },
    { title: "提交信息", desc: "2021/04/13" },
    { title: "提交信息", desc: "2021/04/13" }
  ])
  let activeIndex = ref(0)
  function change() {
    if (activeIndex.value < stepArr.length - 1) {
      activeIndex.value = activeIndex.value + 1
    } else {
      activeIndex.value = 0
    }
  }
  <\/script>`
</script>
<style>
.g-button {
  margin-top: 10px;
}
</style>
