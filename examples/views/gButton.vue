<template>
  <g-card>
    <g-button>通过</g-button>
    <g-button type="red">通过</g-button>
    <g-button type="green">通过</g-button>
    <g-button type="yellow">通过</g-button>
    <g-button dot>通过</g-button>
    <g-button dot badgeColor="pink">通过</g-button>
    <g-button badge="100">通过</g-button>
    <g-button badge="1000" max="100">通过</g-button>
    <g-code>
      {{ s }}
    </g-code>
  </g-card>
</template>

<script lang="ts" setup>
const s = `
  <g-button>通过</g-button>
  <g-button type="red">通过</g-button>
  <g-button type="green">通过</g-button>
  <g-button type="yellow">通过</g-button>
  <g-button dot>通过</g-button>
  <g-button dot badgeColor="pink">通过</g-button>
  <g-button badge="100">通过</g-button>
  <g-button badge="1000" max="100">通过</g-button>`
</script>

<style>
.g-button {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
}
</style>
