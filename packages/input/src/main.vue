<template>
  <div class="g-input-box">
    <input type="text" class="g-input" v-model="modelValue" :placeholder="placeholder ? placeholder : '请输入'" @input="sendValue" v-if="!number" :disabled="disabled" :class="{ 'text-align-center': textCenter }" />
    <input type="text" class="g-input" v-model="modelValue" :placeholder="placeholder ? placeholder : '请输入'" @input="sendValue" @compositionend="onlyNumber" onkeypress="return(/[\d]/.test(String.fromCharCode(event.keyCode)))" v-else :disabled="disabled" :class="{ 'text-align-center': textCenter }" />
    <i class="g-input-triangle" v-if="triangle"></i>
  </div>
</template>

<script lang="ts">
// 定义组件名
import { defineComponent } from "vue"
export default defineComponent({
  name: "gInput"
})
</script>
<script lang="ts" setup>
import { defineEmits, withDefaults, defineProps } from "vue"
const props = withDefaults(
  defineProps<{
    modelValue: string
    placeholder?: string
    triangle?: boolean
    number?: boolean
    disabled?: boolean
    textCenter?: boolean
  }>(),
  {
    modelValue: "",
    triangle: false,
    placeholder: "请输入",
    number: false,
    disabled: false,
    textCenter: false
  }
)
const emits = defineEmits<{
  (e: "update:modelValue", b: string): void
}>()
function sendValue(e: Event) {
  emits("update:modelValue", (e.target as HTMLInputElement).value)
}
function onlyNumber() {
  setTimeout(() => {
    emits("update:modelValue", props.modelValue.replace(/\D/g, ""))
  }, 100)
}
</script>

<style lang="less" scoped>
.g-input-box {
  position: relative;
  .g-input-triangle {
    position: absolute;
    width: 0;
    height: 0;
    top: 6px;
    right: 6px;
    border: 7px solid;
    border-color: #aaaaaa transparent transparent transparent;
    margin-top: 12px;
  }
  .text-align-center {
    text-align: center;
  }
}
.g-input {
  height: 45px;
  width: 100%;
  border: none;
  outline: none;
  padding: 5px 10px;
  line-height: 44px;
  font-size: 16px;
  border-bottom: 2px solid #cccccc;
  &::placeholder {
    color: #cccccc;
    font-size: 16px;
  }
}

.g-inputinput::-webkit-outer-spin-button,
.g-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.g-input[type="number"] {
  -moz-appearance: textfield;
}
</style>
