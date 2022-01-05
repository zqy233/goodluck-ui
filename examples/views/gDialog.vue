<template>
  <g-card>
    <gDialog v-model="showDialog" class="close">
      <gButton @click="cancel">关闭弹窗</gButton>
    </gDialog>
    <gButton @click="openDialog">打开弹窗</gButton>
    <g-code>
      {{ s }}
    </g-code>
  </g-card>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const showDialog = ref(false)
const s = `
  <template>
    <gDialog v-model="showDialog">
      <gButton @click="cancel">关闭弹窗</gButton>
    </gDialog>
    <gButton @click="openDialog">打开弹窗</gButton>
  </template>
  <script lang="ts" setup>
  import { ref } from "vue"
  const showDialog = ref(false)
  function openDialog() {
    showDialog.value = true
  }
  <\/script>`
function openDialog() {
  showDialog.value = true
}
function cancel() {
  showDialog.value = false
}
</script>
