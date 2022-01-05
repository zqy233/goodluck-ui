<template>
  <g-card>
    <g-title>标题</g-title>
    <g-title line>标题</g-title>
    <g-title clip>标题</g-title>
    <g-title clip backgroundColor="skyblue">标题</g-title>
    <g-title clip line backgroundColor="skyblue">标题</g-title>
    <g-code>
      {{ s }}
    </g-code>
  </g-card>
</template>
<script lang="ts" setup>
const s = `
  <g-title>标题</g-title>
  <g-title line>标题</g-title>
  <g-title clip>标题</g-title>
  <g-title clip backgroundColor="skyblue">标题</g-title>
  <g-title clip line backgroundColor="skyblue">标题</g-title>
`
</script>
<style>
.g-title {
  margin-top: 10px;
}
</style>
