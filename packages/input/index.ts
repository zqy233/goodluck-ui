import input from "./src/main.vue"
import { App } from "vue"
input.install = (app: App): void => {
  app.component(input.name, input)
}
export default input
