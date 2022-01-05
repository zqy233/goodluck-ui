<template>
  <g-card>
    <section class="icons">
      <div class="icon-box" v-for="item in icons" @click="copy(item)">
        <i :class="['fa', 'fa-' + item]" aria-hidden="true"></i>
        <p>{{ item }}</p>
      </div>
    </section>
    <g-code>
      {{ s }}
    </g-code>
  </g-card>
</template>

<script lang="ts" setup>
const icons = ["angle-up", "angle-down", "angle-left", "angle-right", "caret-up", "caret-down", "caret-left", "caret-right", "weixin", "weibo", "qq", "windows", "linux", "html5", "git", "github", "rocket", "wheelchair-alt", "search", "send", "navicon", "adjust"]
function copy(item: string) {
  // 自动复制
  const input = document.createElement("input")
  document.body.appendChild(input)
  input.value = `<i class="fa fa-${item}"/>`
  input.select()
  document.execCommand("Copy")
  document.body.removeChild(input)
}
const s = `
  <i class="fa fa-angle-up"/>
  <i class="fa fa-angle-down"/>
  <i class="fa fa-angle-left"/>
  <i class="fa fa-angle-right"/>
  <i class="fa fa-caret-up"/>
  <i class="fa fa-caret-down"/>
  <i class="fa fa-caret-left"/>
  <i class="fa fa-caret-right"/>
  <i class="fa fa-weixin"/>
  <i class="fa fa-weibo"/>
  <i class="fa fa-qq"/>
  <i class="fa fa-windows"/>
  <i class="fa fa-linux"/>
  <i class="fa fa-html5"/>
  <i class="fa fa-git"/>
  <i class="fa fa-github"/>
  <i class="fa fa-rocket"/>
  <i class="fa fa-wheelchair-alt"/>
  <i class="fa fa-search"/>
  <i class="fa fa-send"/>
  <i class="fa fa-navicon"/>
  <i class="fa fa-adjust"/>`
</script>

<style lang="less">
.icons {
  display: flex;
  flex-wrap: wrap;
}
.icon-box {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  i {
    font-size: 30px;
    margin-bottom: 7px;
    transition: transform 0.2s;
  }
}
.icon-box:hover {
  background-color: #409eff;
  color: #fff;
  cursor: pointer;
  i {
    transform: scale(1.2, 1.2);
  }
}
</style>
