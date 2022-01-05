import message from "./src/main.vue"
import { App } from "vue"
message.install = (app: App): void => {
  app.component(message.name, message)
}
export default message
