import code from "./src/main.vue"
import { App } from "vue"
code.install = (app: App): void => {
  app.component(code.name, code)
}
export default code
