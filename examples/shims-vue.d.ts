// 使用typescript定义组件中install的两种写法
// 写法一
// declare module '*.vue' {
//   import type { App, DefineComponent } from 'vue'
//   const component: DefineComponent<{}, {}, any> & {
//     install(app: App): void
//   }
//   export default component
// }
// 写法二
declare module "*.vue" {
  import { defineComponent } from "vue"
  const component: ReturnType<typeof defineComponent>
  export default component
}
declare module "prismjs"
