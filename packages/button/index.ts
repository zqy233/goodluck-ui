import button from "./src/main.vue"
import { App } from "vue"
button.install = (app: App): void => {
  app.component(button.name, button)
}
export default button
