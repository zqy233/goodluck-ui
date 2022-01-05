import button from "./button"
import dialog from "./dialog"
import steps from "./steps"
import title from "./title"
import card from "./card"
import message from "./message"
import input from "./input"
import code from "./code"
import { App } from "vue"
// 所有组件列表
import "../styles/font-awesome/font-awesome.min.css"
const components = [button, input, steps, title, dialog, card, code]
const componentsInstall: any = {}
for (let i of components) {
  componentsInstall[i.name] = i
}
// 定义install方法，接收Vue实例作为参数
const install = (app: App): void => {
  if ((install as any).installed) return
  components.map(component => app.component(component.name, component))
}
if (typeof window !== "undefined" && (window as any).Vue) {
  install((window as any).Vue)
}
export default {
  install,
  ...componentsInstall
}
