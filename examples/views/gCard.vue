<template>
  <g-card>
    <g-code>
      {{ s }}
    </g-code>
  </g-card>
</template>

<script lang="ts" setup>
const s = `
  <g-card>
    <g-button>card组件提供插槽</g-button>
  </g-card>`
</script>

<style>
::-webkit-scrollbar {
  width: 10px;
  background-color: #0099ff;
}
::-webkit-scrollbar-track {
  background-color: #fff;
}
::-webkit-scrollbar-thumb {
  border-radius: 0;
  background-color: #fff;
}
</style>
