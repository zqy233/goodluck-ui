<template>
  <article class="g-steps">
    <div v-for="(item, key) in stepArr" :key="key" :class="key <= activeIndex ? 'steps-active' : 'steps-not-active'">
      <div class="steps-header">
        <div :class="key < activeIndex ? 'steps-active-line' : 'steps-not-active-line'"></div>
        <div class="steps-radius"></div>
      </div>
      <div>{{ item.title }}</div>
      <div>{{ item.desc }}</div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "gSteps"
})
</script>
<script setup lang="ts">
import { toRefs } from "vue"
type step = {
  title: string
  desc: string
}
const props = defineProps<{
  stepArr: step[]
  activeIndex: number
}>()
const { stepArr, activeIndex } = toRefs(props)
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
