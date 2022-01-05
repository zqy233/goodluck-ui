<template>
  <div :class="['g-title', props.line ? 'g-title-line' : '']" :style="props.line ? { borderBottom: `3px solid ${props.backgroundColor}` } : ''">
    <div :class="[props.clip ? 'g-title-content' : '']" :style="props.clip ? { backgroundColor: props.backgroundColor } : ''">
      <slot></slot>
    </div>
    <div v-if="props.clip" class="g-title-clip" :style="{ backgroundColor: props.backgroundColor }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "gTitle"
})
</script>
<script lang="ts" setup>
import { defineProps, withDefaults } from "vue"
const props = withDefaults(
  defineProps<{
    clip?: boolean
    line?: boolean
    backgroundColor?: string
  }>(),
  {
    clip: false,
    line: false,
    backgroundColor: ""
  }
)
</script>

<style lang="less" scoped>
.g-title {
  display: flex;
  font-size: 20px;
  font-weight: bold;
  .g-title-content {
    background-color: #1f68d1;
    color: white;
    padding: 5px 15px;
  }
  .g-title-clip {
    min-width: 20px;
    width: 20px;
    height: auto;
    background-color: #1f68d1;
    clip-path: polygon(0 2%, 0% 100%, 100% 100%);
  }
}

.g-title-line {
  width: 100%;
  border-bottom: 3px solid #1f68d1;
}
</style>
