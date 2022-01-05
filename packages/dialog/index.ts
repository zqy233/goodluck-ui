import dialog from "./src/main.vue"
import { App } from "vue"
dialog.install = (app: App): void => {
  app.component(dialog.name, dialog)
}
export default dialog
