<template>
  <g-card>
    <g-Input v-model="text"></g-Input>
    <g-Input v-model="text" placeholder="更改placeholder"></g-Input>
    <g-Input v-model="text" triangle placeholder="添加箭头图标"></g-Input>
    <g-Input v-model="text" textCenter placeholder="文本居中"></g-Input>
    <g-Input v-model="text" placeholder="禁用" disabled></g-Input>
    <g-Input v-model="number" number placeholder="只允许输入数字（禁止e的输入，禁止输入法输入非数字）"></g-Input>
    <p>输入的内容：{{ text }}</p>
    <g-code>
      {{ s }}
    </g-code>
  </g-card>
</template>
<script lang="ts" setup>
import { ref } from "vue"
const text = ref("")
const number = ref("")
const s = `
  <template>
    <g-Input v-model="text"></g-Input>
    <g-Input v-model="text" placeholder="更改placeholder"></g-Input>
    <g-Input v-model="text" triangle placeholder="添加箭头图标"></g-Input>
    <g-Input v-model="text" placeholder="禁用" disabled></g-Input>
    <g-Input v-model="number" number placeholder="只允许输入数字（禁止e的输入，禁止输入法输入非数字）"></g-Input>
  </template>
  <script lang="ts" setup>
  import { ref } from "vue"
  const account = ref("")
  <\/script>
`
</script>
<style>
.g-input-box {
  margin-bottom: 20px;
}
</style>
