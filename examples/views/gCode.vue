<template>
  <g-card>
    <g-code>
      <!-- 使用g-code包裹字符串 -->
      {{ s }}
    </g-code>
  </g-card>
</template>

<script lang="ts" setup>
const s = `
  <!-- 使用g-code组件包裹字符串 -->
    <g-code>
      {{ s }}
    </g-code>
`
</script>

<style></style>
